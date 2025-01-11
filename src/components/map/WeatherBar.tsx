import React from 'react';
import { Cloud } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const WeatherBar: React.FC = () => {
  const { weather, setWeather } = useStore();

  return (
    <div className="absolute top-2 left-2 flex items-center gap-2 bg-gray-800/90 rounded-md p-1.5 pr-3">
      <div className="flex items-center gap-2">
        <Cloud className="w-4 h-4 text-white" />
        <span className="text-white text-xs font-medium">
          {weather.charAt(0).toUpperCase() + weather.slice(1)}
        </span>
      </div>
      <div className="bg-yellow-600/90 rounded-sm px-1.5 py-0.5 mr-2">
        <span className="text-white text-[10px]">
          {weather === 'stormy' ? 'Delivery times 100% slower' : 
           weather === 'rainy' ? 'Delivery times 50% slower' : 
           'Normal delivery speed'}
        </span>
      </div>
    </div>
  );
};