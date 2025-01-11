import { API_CONFIG } from './config';
import { getAnthropicClient } from './anthropicClient';
import { formatMenuPrompt } from './menuService';

export const generateMenuResponse = async (userInput: string): Promise<string> => {
  try {
    const client = getAnthropicClient();
    
    const message = await client.messages.create({
      model: API_CONFIG.MODEL,
      max_tokens: API_CONFIG.MAX_TOKENS,
      messages: [formatMenuPrompt(userInput)],
      temperature: API_CONFIG.TEMPERATURE
    });

    return message.content[0].text;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Anthropic API Error:', error.message);
      
      if (error.message.includes('API key')) {
        return "Sorry, there's a configuration issue. Please contact support.";
      }
      
      if (error.message.includes('rate limit')) {
        return "I'm a bit busy right now. Please try again in a moment.";
      }
    }
    
    return "I apologize, but I'm having trouble processing your request. Please try asking about our menu items directly.";
  }
};