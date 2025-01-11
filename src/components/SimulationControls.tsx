import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { useStore } from "../store/useStore";

interface SimulationControlsProps {
  className?: string;
}

export const SimulationControls: React.FC<SimulationControlsProps> = ({
  className,
}) => {
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
      className={`${className} px-4 py-2 rounded-full shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2 ${
        isPlaying
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-green-500 hover:bg-green-600 text-white"
      }`}
    >
      {isPlaying ? (
        <>
          <Pause className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-medium text-sm">Stop</span>
        </>
      ) : (
        <>
          <Play className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-medium text-sm">Play</span>
        </>
      )}
    </button>
  );
};
