import OpenAI from 'openai';
import { MENU_ITEMS } from '../data/menu';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateMenuResponse = async (userInput: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful pizza restaurant assistant. Here's our menu: ${JSON.stringify(MENU_ITEMS)}`
        },
        {
          role: "user",
          content: userInput
        }
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 150
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get menu recommendations');
  }
};