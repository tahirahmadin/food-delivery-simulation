import React from 'react';
import { Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';
import { useStore } from '../store/useStore';

export const WeatherControls: React.FC = () => {
  const { weather, setWeather } = useStore();

  const buttonClass = (condition: string) => `
    p-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md
    ${weather === condition 
      ? condition === 'sunny' 
        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
        : condition === 'rainy'
        ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
        : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
    }
  `;

  return (
    <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-2">
      <button
        onClick={() => setWeather('sunny')}
        className={buttonClass('sunny')}
      >
        <Sun className="w-5 h-5" />
      </button>
      <button
        onClick={() => setWeather('rainy')}
        className={buttonClass('rainy')}
      >
        <CloudRain className="w-5 h-5" />
      </button>
      <button
        onClick={() => setWeather('stormy')}
        className={buttonClass('stormy')}
      >
        <CloudLightning className="w-5 h-5" />
      </button>
    </div>
  );
};