import { useState, useCallback } from 'react';
import { generateMenuResponse } from '../services/menuService';
import { MenuItem } from '../types';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I can help you find the perfect pizza. Try asking about our menu, vegetarian options, or pizzas under a specific price!", isBot: true }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedItems, setSuggestedItems] = useState<MenuItem[]>([]);

  const processUserInput = useCallback(async (input: string) => {
    setIsLoading(true);
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    const { response, suggestions } = generateMenuResponse(input);
    setSuggestedItems(suggestions);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsLoading(false);
  }, []);

  return {
    messages,
    isLoading,
    suggestedItems,
    processUserInput,
    clearSuggestions: () => setSuggestedItems([])
  };
};