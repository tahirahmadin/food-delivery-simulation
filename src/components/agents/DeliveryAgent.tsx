import React from 'react';
import { useStore } from '../../store/useStore';
import { Bike, Pizza } from 'lucide-react';

export const DeliveryAgent: React.FC = () => {
  const { orders } = useStore();
  // Get active delivery and queued orders
  const activeDelivery = orders.find(order => 
    order.status === 'out_for_delivery' ||
    (order.status === 'delivered' && order.isReturning)
  );
  
  const queuedOrders = orders.filter(order => 
    order.status === 'placed'
  );

  const readyOrders = orders.filter(order =>
    order.status === 'preparing' && order.cookingTimeLeft <= 0
  );
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-3 rounded-xl shadow-lg border border-blue-500/20 h-[180px]">
      <div className="flex items-center gap-2 mb-3">
        <Bike className="w-6 h-6 text-blue-500" />
        <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Delivery Agent
        </h2>
      </div>
      <div className="space-y-2 overflow-auto h-[calc(100%-3.5rem)] pr-2 custom-scrollbar">
        {/* Active Delivery */}
        {activeDelivery && (
          <div key={`delivery-order-${activeDelivery.id}`} className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-blue-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-blue-300">Order #{parseInt(activeDelivery.id)}</span>
              <div className={`px-1.5 py-0.5 rounded-full text-[9px] ${
                activeDelivery.status === 'out_for_delivery' 
                  ? 'bg-blue-500/20 text-blue-300' 
                  : 'bg-green-500/20 text-green-300'
              }`}>
                {activeDelivery.status === 'out_for_delivery' ? 'Delivering' : 'Returning'}
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-800/80 rounded-lg p-2" data-order-id={activeDelivery.id}>
              <div className="w-12 h-12 relative">
                <img
                  src={activeDelivery.items[0].image}
                  alt={activeDelivery.items[0].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-medium text-blue-300 truncate">{activeDelivery.items[0].name}</h3>
                  <span className="text-[9px] text-blue-400/80">{activeDelivery.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] text-blue-400/80">
                  <div className="flex items-center gap-1">
                    <Pizza className="w-3 h-3" />
                    <span>{activeDelivery.items[0].size}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Queued Orders */}
        {readyOrders.length > 0 && (
          <div className="mt-2">
            <div className="text-[10px] text-yellow-400/80 mb-2 pl-1">Ready for Delivery ({readyOrders.length})</div>
            {readyOrders.map((order, index) => (
              <div key={`ready-order-${order.id}`} className="bg-gray-800/30 backdrop-blur-sm p-2 rounded-lg border border-yellow-500/10 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-yellow-300">Order #{parseInt(order.id)}</span>
                  <span className="text-[8px] text-yellow-400/60">Ready for delivery</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {queuedOrders.length > 0 && (
          <div className="mt-2">
            <div className="text-[10px] text-blue-400/80 mb-2 pl-1" aria-label="Queue status">Waiting ({queuedOrders.length})</div>
            {queuedOrders.map((order, index) => (
              <div key={`queued-order-${order.id}`} className="bg-gray-800/30 backdrop-blur-sm p-2 rounded-lg border border-blue-500/10 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-blue-300">Order #{parseInt(order.id)}</span>
                  <span className="text-[8px] text-blue-400/60">Waiting in queue</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};