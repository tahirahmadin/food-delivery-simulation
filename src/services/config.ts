export const API_CONFIG = {
  DEEPSEEK_API_KEY: import.meta.env.VITE_DEEPSEEK_API_KEY || "sk-e652b62dac4449e6b3e3f60ef55aadf8",
  MODEL: "deepseek-chat",
  MAX_TOKENS: 150,
  TEMPERATURE: 0.7
} as const;

export const validateApiConfig = () => {
  if (!API_CONFIG.DEEPSEEK_API_KEY) {
    throw new Error('Missing DeepSeek API key');
  }
  return true;
};