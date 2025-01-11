import Anthropic from '@anthropic-ai/sdk';
import { API_CONFIG, validateApiConfig } from './config';

let anthropicClient: Anthropic | null = null;

export const getAnthropicClient = () => {
  if (!anthropicClient) {
    try {
      validateApiConfig();
      anthropicClient = new Anthropic({
        apiKey: API_CONFIG.ANTHROPIC_API_KEY
      });
    } catch (error) {
      console.error('Failed to initialize Anthropic client:', error);
      throw error;
    }
  }
  return anthropicClient;
};