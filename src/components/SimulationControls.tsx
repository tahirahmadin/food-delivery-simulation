import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useStore } from '../store/useStore';

interface SimulationControlsProps {
  isMobile?: boolean;
}

export const SimulationControls: React.FC<SimulationControlsProps> = ({ isMobile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { simulateOrder } = useStore();
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlaying) {
      // Initial order
      simulateOrder();
      
      // Set up interval for continuous orders
      intervalRef.current = setInterval(() => {
        simulateOrder();
      }, 15000); // New order every 15 seconds
    } else {
      // Clear interval when stopped
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, simulateOrder]);

  const toggleSimulation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSimulation}
      className={`fixed ${
        isMobile ? 'bottom-4 left-4 px-4 py-2' : 'bottom-8 left-8 px-6 py-3'
      } rounded-full shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${
        isPlaying 
          ? 'bg-red-500 hover:bg-red-600 text-white' 
          : 'bg-green-500 hover:bg-green-600 text-white'
      }`}
    >
      {isPlaying ? (
        <>
          <Pause className={isMobile ? "w-5 h-5" : "w-6 h-6"} strokeWidth={2.5} />
          <span className={`font-medium ${isMobile ? 'text-sm' : ''}`}>Stop</span>
        </>
      ) : (
        <>
          <Play className={isMobile ? "w-5 h-5" : "w-6 h-6"} strokeWidth={2.5} />
          <span className={`font-medium ${isMobile ? 'text-sm' : ''}`}>Play</span>
        </>
      )}
    </button>
  );
};