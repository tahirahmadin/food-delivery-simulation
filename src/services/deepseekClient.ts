import { DeepSeek } from 'deepseek-ai';
import { API_CONFIG } from './config';

let deepseekClient: DeepSeek | null = null;

export const getDeepseekClient = () => {
  if (!deepseekClient) {
    try {
      deepseekClient = new DeepSeek({
        apiKey: API_CONFIG.DEEPSEEK_API_KEY
      });
    } catch (error) {
      console.error('Failed to initialize DeepSeek client:', error);
      throw error;
    }
  }
  return deepseekClient;
};