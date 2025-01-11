import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { PizzaOptions } from './PizzaOptions';
import { useChatbot } from '../../hooks/useChatbot';
import { useStore } from '../../store/useStore';
import { MenuItem } from '../../types';

export const GauravChat: React.FC = () => {
  const { messages, isLoading, suggestedItems, processUserInput, clearSuggestions } = useChatbot();
  const [selectedPizza, setSelectedPizza] = useState<MenuItem | null>(null);
  const { simulateOrder } = useStore();

  const handleClose = () => {
    useStore.setState({ showGauravChat: false });
  };

  const handleUserInput = async (input: string) => {
    if (input.trim()) {
      await processUserInput(input);
    }
  };

  const handlePizzaSelect = (pizza: MenuItem) => {
    setSelectedPizza(pizza);
    clearSuggestions();
    processUserInput(`I'd like to order a ${pizza.name}`);
  };

  const confirmOrder = () => {
    if (selectedPizza) {
      const timeMatch = selectedPizza.time_to_cook.match(/(\d+)/);
      const cookingTime = timeMatch ? parseInt(timeMatch[1]) : 15;

      // Create a proper order object
      const order = {
        id: Math.random().toString(36).substr(2, 9),
        items: [selectedPizza],
        totalPrice: selectedPizza.price,
        status: 'preparing',
        orderTime: new Date(),
        cookingTimeLeft: cookingTime,
        customerLocation: [40.7128, -74.0060],
        deliveryDistance: 2,
        destination: 'Gaurav House',
        isReturning: false
      };

      const store = useStore.getState();
      store.addOrder(order);

      // Start cooking timer
      const cookingInterval = setInterval(() => {
        const currentOrder = useStore.getState().orders.find(o => o.id === order.id);
        
        if (!currentOrder || currentOrder.status === 'completed') {
          clearInterval(cookingInterval);
          clearInterval(deliveryInterval);
        } else if (currentOrder.status === 'preparing' && !useStore.getState().isPaused) {
          store.updateCookingTime();
          if (currentOrder.cookingTimeLeft <= 0) {
            store.updateOrderStatus(order.id, 'out_for_delivery');
            clearInterval(cookingInterval);
          }
        }
      }, 1000);

      // Start delivery progress tracking
      const deliveryInterval = setInterval(() => {
        const currentOrder = useStore.getState().orders.find(o => o.id === order.id);
        
        if (!currentOrder || currentOrder.status === 'completed') {
          clearInterval(deliveryInterval);
        } else if (currentOrder.status === 'out_for_delivery' || 
                  (currentOrder.status === 'delivered' && currentOrder.isReturning)) {
          store.updateDeliveryProgress();
        }
      }, 50);

      processUserInput("Order confirmed! Your pizza will be delivered to Gaurav House.");
      setTimeout(handleClose, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl shadow-xl w-96 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-white font-medium">Order for Gaurav House</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isBot={msg.isBot} />
          ))}
          
          {isLoading && (
            <div className="flex justify-center">
              <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
            </div>
          )}
          
          {suggestedItems.length > 0 && (
            <PizzaOptions 
              pizzas={suggestedItems}
              onSelect={handlePizzaSelect}
            />
          )}
        </div>

        <div className="p-4 border-t border-gray-700">
          {selectedPizza ? (
            <button
              onClick={confirmOrder}
              className="w-full bg-purple-500 text-white rounded-lg py-2 hover:bg-purple-600 transition-colors"
            >
              Confirm Order for Gaurav House
            </button>
          ) : (
            <input
              type="text"
              placeholder="What would you like to order?"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUserInput(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};