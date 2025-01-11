import React from 'react';
import { Map } from '../Map';
import { AgentsPanel } from '../AgentsPanel';
import { WeatherControls } from '../WeatherControls';
import { InventoryButton } from '../inventory/InventoryButton';
import { SimulationControls } from '../SimulationControls';
import { TotalSales } from '../TotalSales';
import { GauravChat } from '../chat/GauravChat';
import { useStore } from '../../store/useStore';

export const DemoSimulation: React.FC = () => {
  const showGauravChat = useStore(state => state.showGauravChat);

  // Check if screen is mobile
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-gray-900 p-4">
      <div className={`${isMobile ? 'flex flex-col' : 'flex'} gap-4 h-full`}>
        {/* Left Side - Map */}
        <div className={`${isMobile ? 'h-[40vh]' : 'w-1/2 h-full'} bg-gray-800 rounded-lg overflow-hidden`}>
          <Map />
        </div>

        {/* Right Side - Agents */}
        <div className={`${isMobile ? 'h-[60vh]' : 'w-1/2 h-full'} flex flex-col gap-4`}>
          {/* Controls */}
          <div className="flex items-center justify-end gap-4 bg-gray-800/50 p-3 rounded-lg">
            <InventoryButton />
            <WeatherControls />
            <TotalSales />
          </div>
          
          {/* Agents */}
          <AgentsPanel />
        </div>
      </div>
      <SimulationControls isMobile={isMobile} />
      {showGauravChat && <GauravChat />}
    </div>
  );
};