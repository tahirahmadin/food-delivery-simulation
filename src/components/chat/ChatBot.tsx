import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { PizzaOptions } from './PizzaOptions';
import { useChatbot } from '../../hooks/useChatbot';
import { useStore } from '../../store/useStore';
import { MenuItem } from '../../types';

interface ChatBotProps {
  onClose: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const { 
    messages, 
    isLoading, 
    suggestedItems, 
    processUserInput, 
    clearSuggestions 
  } = useChatbot();
  const [selectedPizza, setSelectedPizza] = useState<MenuItem | null>(null);
  const { simulateOrder } = useStore();

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
      simulateOrder();
      processUserInput("Confirm my order");
      setTimeout(onClose, 2000);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 w-96 bg-gray-800 rounded-lg shadow-xl">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h3 className="text-white font-medium">Pizza Assistant</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
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
            Confirm Order
          </button>
        ) : (
          <input
            type="text"
            placeholder="Type your query (e.g., 'show me pizza less than $10')"
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
  );
};