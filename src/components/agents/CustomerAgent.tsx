import React from 'react';
import { useStore } from '../../store/useStore';
import { format } from 'date-fns';
import { Users, Home, Pizza } from 'lucide-react';

export const CustomerAgent: React.FC = () => {
  const { orders } = useStore();
  
  return (
    <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900/80 rounded-xl shadow-lg border border-purple-500/20 h-[300px]">
      <div className="flex items-center gap-2 mb-3">
        <Users className="w-6 h-6 text-purple-500" aria-hidden="true" />
        <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Customer Agent
        </h2>
      </div>
      <div className="space-y-2 overflow-auto h-[calc(100%-3.5rem)] pr-2 custom-scrollbar">
        {orders.map(order => (
          <div key={`customer-order-${order.id}`} className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-lg border border-purple-500/20">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-purple-300">{format(order.orderTime, 'HH:mm')}</span>
                <div className="flex items-center gap-1 bg-purple-500/20 px-2 py-0.5 rounded-full">
                  <Home className="w-3 h-3 text-purple-400" />
                  <span className="text-[9px] text-purple-300">{order.destination.split(' ')[0]}</span>
                </div>
              </div>
              <span className={`px-1.5 py-0.5 rounded ${
                order.status === 'delivered' ? 'bg-green-900/50 text-green-300' :
                order.status === 'preparing' ? 'bg-yellow-900/50 text-yellow-300' :
                order.status === 'out_for_delivery' ? 'bg-blue-900/50 text-blue-300' :
                'bg-gray-900/50 text-gray-300'
              } text-[9px] whitespace-nowrap`}>
                {order.status === 'out_for_delivery' ? 'delivering' : order.status.replace('_', ' ')}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/80 rounded-lg p-1.5">
              <div className="w-10 h-10 relative">
                <img
                  src={order.items[0].image}
                  alt={order.items[0].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[10px] font-medium text-purple-300 truncate">{order.items[0].name}</h3>
                <div className="flex items-center gap-2 text-[9px] text-purple-400/80">
                  <div className="flex items-center gap-1">
                    <Pizza className="w-3 h-3" />
                    <span>{order.items[0].size}</span>
                  </div>
                  {order.items.length > 1 && (
                    <span>+{order.items.length - 1} more</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};