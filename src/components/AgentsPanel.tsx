import React from 'react';
import { CustomerAgent } from './agents/CustomerAgent';
import { RestaurantAgent } from './agents/RestaurantAgent';
import { DeliveryAgent } from './agents/DeliveryAgent';
import { AccountingAgent } from './agents/AccountingAgent';

export const AgentsPanel: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${
      isMobile 
        ? 'flex flex-col' 
        : 'grid grid-cols-2'
    } gap-4 h-[calc(100%-4rem)]`}>
      <div className="flex flex-col gap-4">
        <CustomerAgent />
        <DeliveryAgent />
      </div>
      <div className={`flex flex-col gap-4 ${isMobile ? 'h-[40vh]' : ''}`}>
        <RestaurantAgent />
        <AccountingAgent />
      </div>
    </div>
  );
};