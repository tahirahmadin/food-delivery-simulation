import { MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types';

const sortByPrice = (items: MenuItem[]) => 
  [...items].sort((a, b) => a.price - b.price);

export const generateMenuResponse = (userInput: string): { response: string; suggestions: MenuItem[] } => {
  const input = userInput.toLowerCase();
  let suggestions: MenuItem[] = [];
  
  // Show pizzas below price point
  if (input.includes('below') || input.includes('less than') || input.includes('under')) {
    const priceMatch = input.match(/\$?(\d+)/);
    if (priceMatch) {
      const maxPrice = parseInt(priceMatch[1]);
      suggestions = sortByPrice(MENU_ITEMS.filter(item => item.price < maxPrice));
      return {
        response: suggestions.length > 0 
          ? `Here are the pizzas under $${maxPrice}:`
          : `I couldn't find any pizzas under $${maxPrice}. Our cheapest pizza is $${Math.min(...MENU_ITEMS.map(item => item.price))}`,
        suggestions
      };
    }
  }

  // Show vegetarian pizzas
  if (input.includes('veg') || input.includes('vegetarian')) {
    suggestions = MENU_ITEMS.filter(item => item.veg);
    return {
      response: 'Here are our vegetarian options:',
      suggestions
    };
  }

  // Show top 3 pizzas (by price)
  if (input.includes('top 3') || input.includes('best 3')) {
    suggestions = sortByPrice(MENU_ITEMS).reverse().slice(0, 3);
    return {
      response: 'Here are our top 3 premium pizzas:',
      suggestions
    };
  }

  // Show all pizzas
  if (input.includes('menu') || input.includes('all') || input.includes('show')) {
    return {
      response: 'Here\'s our complete menu:',
      suggestions: sortByPrice(MENU_ITEMS)
    };
  }

  // Default response
  return {
    response: 'I can help you find pizzas! Try:\n- "Show me pizza below $10"\n- "Show me veg pizza"\n- "Show me top 3 pizza"',
    suggestions: []
  };
};