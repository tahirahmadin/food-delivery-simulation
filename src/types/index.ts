export interface Order {
  id: string;
  items: MenuItem[];
  totalPrice: number;
  status: OrderStatus;
  orderTime: Date;
  deliveryTime?: Date;
  estimatedDeliveryTime?: Date;
  customerLocation: [number, number];
  deliveryDistance: number;
  deliveryProgress?: number;
  destination: string;
  isReturning?: boolean;
  cookingTimeLeft?: number;
}

export interface MenuItem {
  name: string;
  price: number;
  size: string;
  time_to_cook: string;
  veg: boolean;
  image: string;
}

export interface InventoryItem extends MenuItem {
  quantity: number;
}

export type Weather = 'sunny' | 'rainy' | 'stormy';
export type OrderStatus = 'placed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'completed';