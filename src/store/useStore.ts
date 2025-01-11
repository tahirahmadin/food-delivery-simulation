import { create } from 'zustand';
import { Order, MenuItem, InventoryItem, Weather } from '../types';
import { MENU_ITEMS } from '../data/menu';

interface StoreState {
  orders: Order[];
  inventory: InventoryItem[];
  orderQueue: Order[];
  waitingTimers: { [key: string]: NodeJS.Timeout };
  weather: Weather;
  showSnackbar: boolean;
  totalRevenue: number;
  totalPizzasDelivered: number;
  showCoinAnimation: {
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
    amount: number;
  } | null;
  showGauravChat: boolean;
  isPaused: boolean;
  setWeather: (weather: Weather) => void;
  togglePause: () => void;
  addOrder: (order: Order) => void;
  completeCoinAnimation: () => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updateCookingTime: () => void;
  refillInventory: () => void;
  simulateOrder: () => void;
  updateDeliveryProgress: () => void;
}

export const useStore = create<StoreState>((set, get) => ({
  orders: [],
  inventory: MENU_ITEMS.map(item => ({ ...item, quantity: 5 })),
  orderQueue: [],
  waitingTimers: {},
  weather: 'sunny',
  showSnackbar: false,
  totalRevenue: 0,
  totalPizzasDelivered: 0,
  showCoinAnimation: null,
  showGauravChat: false,
  isPaused: false,
  
  setWeather: (weather) => set({ weather }),
  
  togglePause: () => set(state => ({ isPaused: !state.isPaused })),
  
  addOrder: (order) => set((state) => ({
    orders: [...state.orders, { ...order, deliveryProgress: 0, isReturning: false }],
    inventory: state.inventory.map(item => {
      const orderItem = order.items.find(i => i.name === item.name);
      return orderItem ? { ...item, quantity: item.quantity - 1 } : item;
    })
  })),
  
  updateOrderStatus: (orderId, status) => {
    const state = get();
    const order = state.orders.find(o => o.id === orderId);
    const orderAmount = order?.items.reduce((sum, item) => sum + item.price, 0) || 0;
    
    if (status === 'delivered' && order) {
      // Get elements after a small delay to ensure they're mounted
      setTimeout(() => {
        const totalSalesElement = document.querySelector('.total-sales-component');
        const orderElement = document.querySelector(`[data-order-id="${orderId}"]`);
        
        if (orderElement && totalSalesElement) {
          const orderRect = orderElement.getBoundingClientRect();
          const totalSalesRect = totalSalesElement.getBoundingClientRect();
      
          set((state) => ({
            orders: state.orders.map(o => o.id === orderId ? { ...o, status } : o),
            showCoinAnimation: {
              startPosition: {
                x: orderRect.left + orderRect.width / 2,
                y: orderRect.top + orderRect.height / 2
              },
              endPosition: {
                x: totalSalesRect.left + totalSalesRect.width / 2,
                y: totalSalesRect.top + totalSalesRect.height / 2
              },
              amount: orderAmount
            },
            totalRevenue: state.totalRevenue + orderAmount
          }));
        }
      }, 100);
    } else {
      set((state) => ({
        orders: state.orders.map(o => o.id === orderId ? { ...o, status } : o),
        totalRevenue: status === 'delivered' ? state.totalRevenue + orderAmount : state.totalRevenue
      }));
    }
  },
  
  completeCoinAnimation: () => {
    set((state) => ({
      showCoinAnimation: null
    }));
  },
  
  updateCookingTime: () => set((state) => ({
    orders: state.orders.map(order => {
      if (order.status === 'preparing' && !state.isPaused) {
        const newTime = (order.cookingTimeLeft || 0) - 1;
        if (newTime <= 0) {
          return { ...order, cookingTimeLeft: 0 };
        }
        return { ...order, cookingTimeLeft: newTime };
      }
      return order;
    })
  })),

  refillInventory: () => set((state) => ({
    ...state,
    inventory: state.inventory.map(item => ({
      ...item,
      quantity: Math.min(5, item.quantity + (5 - item.quantity))
    })),
    showSnackbar: state.inventory.some(item => item.quantity === 0)
  })),

  updateDeliveryProgress: () => set((state) => ({
    orders: state.orders.map(order => {
      if (order.status === 'out_for_delivery' || (order.status === 'delivered' && order.isReturning)) {
        const newProgress = (order.deliveryProgress || 0) + 1;
        
        // Delivery complete
        if (newProgress >= 100 && !order.isReturning) {
          return {
            ...order,
            status: 'delivered',
            deliveryProgress: 0,
            isReturning: true
          };
        }
        
        // Return journey complete
        if (order.isReturning && newProgress >= 100) {
          return { ...order, status: 'completed' };
        }
        
        return { ...order, deliveryProgress: newProgress };
      }
      return order;
    }).filter(order => order.status !== 'completed')
  })),

  startReturnJourney: (orderId: string) => set((state) => ({
    orders: state.orders.map(order => {
      if (order.id === orderId && order.status === 'delivered' && !order.isReturning) {
        return {
          ...order,
          deliveryProgress: 0,
          isReturning: true
        };
      }
      return order;
    })
  })),

  simulateOrder: () => {
    const state = get();
    const availableItems = state.inventory.filter(item => item.quantity > 0);
    if (availableItems.length === 0) {
      return;
    }

    // Check for active delivery or preparing order
    const hasActiveDelivery = state.orders.some(order => 
      order.status === 'out_for_delivery' || 
      (order.status === 'delivered' && order.isReturning)
    );
    const hasPreparingOrder = state.orders.some(order => 
      order.status === 'preparing'
    );
    
    // Start preparing if no other order is being prepared
    const initialStatus = hasPreparingOrder ? 'placed' : 'preparing';
    
    // Select only one random item
    const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
    
    const destinations = ['Habib House', 'Salman House', 'Ashwin House', 'Gaurav House'];
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];
    
    const timeMatch = randomItem.time_to_cook.match(/(\d+)/);
    const cookingTime = timeMatch ? parseInt(timeMatch[1]) : 0;
    
    // Generate a sequential order number
    const currentOrders = state.orders;
    const orderNumber = currentOrders.length + 1;
    
    const order: Order = {
      id: orderNumber.toString(),
      items: [randomItem],
      totalPrice: parseFloat(randomItem.price.toFixed(2)),
      status: initialStatus,
      orderTime: new Date(),
      cookingTimeLeft: cookingTime,
      customerLocation: [
        40.7128 + (Math.random() - 0.5) * 0.1,
        -74.0060 + (Math.random() - 0.5) * 0.1
      ],
      deliveryDistance: Math.random() * 5 + 1,
      deliveryProgress: 0,
      destination: randomDestination,
      isReturning: false
    };
    
    // Add order to state
    set(state => ({
      orders: [...state.orders, order],
      inventory: state.inventory.map(item => {
        const orderItem = order.items.find(i => i.name === item.name);
        return orderItem ? { ...item, quantity: item.quantity - 1 } : item;
      })
    }));
    
    // Start cooking timer
    const cookingInterval = setInterval(() => {
      const currentOrder = get().orders.find(o => o.id === order.id);
      const hasActiveDelivery = get().orders.some(o => 
        o.status === 'out_for_delivery' || 
        (o.status === 'delivered' && o.isReturning)
      );
      const hasPreparingOrder = get().orders.some(o => 
        o.status === 'preparing' && o.id !== order.id
      );

      if (!currentOrder || currentOrder.status === 'completed') {
        clearInterval(cookingInterval);
        
        // Update total pizzas delivered when order is completed
        if (currentOrder?.status === 'completed') {
          set(state => ({
            totalPizzasDelivered: state.totalPizzasDelivered + (currentOrder.items.length || 0)
          }));
        }
        
        // Wait 5 seconds at destination before returning
        const waitingTimer = setTimeout(() => {
          state.startReturnJourney(order.id);
        }, 5000);
        
        set(state => ({
          waitingTimers: {
            ...state.waitingTimers,
            [order.id]: waitingTimer
          }
        }));
      } else if (currentOrder.status === 'preparing') {
        if (!get().isPaused) {
          state.updateCookingTime();
          
          // When cooking is done, only start delivery if no other delivery is active
          if (currentOrder.cookingTimeLeft <= 0 && !get().isPaused) {
            if (!hasActiveDelivery) {
              state.updateOrderStatus(order.id, 'out_for_delivery');
              clearInterval(cookingInterval);
            }
          }
        }
      } else if (currentOrder.status === 'placed' && !hasPreparingOrder) {
        // Start preparing if no other order is being prepared
        if (!get().isPaused) {
          state.updateOrderStatus(order.id, 'preparing');
        }
      }
    }, 1000); // Update cooking time every second

    // Start delivery progress tracking
    const deliveryInterval = setInterval(() => {
      const currentOrder = get().orders.find(o => o.id === order.id);
      const hasActiveDelivery = get().orders.some(o => 
        o.status === 'out_for_delivery' || 
        (o.status === 'delivered' && o.isReturning)
      );
      const hasPreparingOrder = get().orders.some(o => 
        o.status === 'preparing'
      );
      
      // Clear interval if order is completed or doesn't exist
      if (!currentOrder || currentOrder.status === 'completed') {
        clearInterval(deliveryInterval);
        
        // When delivery is completed, process next order
        if (currentOrder?.status === 'completed') {
          // Wait 1 second before processing next order
          setTimeout(() => {
            // Find next order to process
            const nextOrder = get().orders.find(o => 
              (o.status === 'placed' && !hasPreparingOrder) || 
              (o.status === 'preparing' && o.cookingTimeLeft <= 0 && !hasActiveDelivery)
            );
            
            if (nextOrder && nextOrder.status === 'placed') {
              state.updateOrderStatus(nextOrder.id, 'preparing');
            } else if (nextOrder && nextOrder.status === 'preparing') {
              state.updateOrderStatus(nextOrder.id, 'out_for_delivery');
            }
          }, 1000);
        }
      } else if (currentOrder.status === 'out_for_delivery' || (currentOrder.status === 'delivered' && currentOrder.isReturning)) {
        state.updateDeliveryProgress();
        
        if (currentOrder.deliveryProgress >= 100 && !currentOrder.isReturning) {
          state.updateOrderStatus(currentOrder.id, 'delivered');
        }
      }
    }, 50); // Update delivery progress every 50ms
  },
}));