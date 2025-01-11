import React from 'react';
import { useStore } from '../../store/useStore';
import { Timer, Pizza, ChefHat, AlertCircle, Pause, Play } from 'lucide-react';

export const RestaurantAgent: React.FC = () => {
  const { orders } = useStore();
  const preparingOrders = orders.filter(order => order.status === 'preparing');
  const currentOrder = preparingOrders[0]; // Get the first preparing order
  const isPaused = useStore(state => state.isPaused);
  const togglePause = useStore(state => state.togglePause);
  const emptyInventoryCount = useStore(state => 
    state.inventory.filter(item => item.quantity === 0).length
  );
  const queuedOrders = orders.filter(order => order.status === 'placed').length;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-3 rounded-xl shadow-lg border border-red-500/20 h-[220px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6 text-red-500" />
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Restaurant Agent
          </h2>
          <button
            onClick={togglePause}
            className={`ml-2 p-1.5 rounded-lg transition-colors ${
              isPaused 
                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
            }`}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
        </div>
        {emptyInventoryCount > 0 && (
          <div className="flex items-center gap-1 bg-red-500/20 px-2 py-1 rounded text-xs text-red-400">
            <AlertCircle className="w-3 h-3" />
            {emptyInventoryCount} items out of stock
          </div>
        )}
        {queuedOrders > 0 && (
          <div className="ml-2 bg-yellow-500/20 px-2 py-1 rounded text-xs text-yellow-400">
            {queuedOrders} in queue
          </div>
        )}
      </div>
      
      {/* Current Order */}
      {currentOrder && (
        <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-red-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-medium text-red-300">Order #{parseInt(currentOrder.id)}</span>
            <Timer className={`w-4 h-4 text-red-400 ${!isPaused && 'animate-pulse'}`} />
          </div>
          
          <div className="flex items-center gap-3 bg-gray-800/80 rounded-lg p-2">
            <div className="w-12 h-12 relative">
              <img
                src={currentOrder.items[0].image}
                alt={currentOrder.items[0].name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[10px] font-medium text-red-300 truncate">{currentOrder.items[0].name}</h3>
              <div className="flex items-center gap-2 text-[9px] text-red-400/80">
                <div className="flex items-center gap-2">
                  <Pizza className="w-3 h-3" />
                  <span>{currentOrder.items[0].size}</span>
                </div>
                <div className={`px-2 py-0.5 rounded-full ${
                  currentOrder.cookingTimeLeft > 10 ? 'bg-red-500/20 text-red-300' :
                  currentOrder.cookingTimeLeft > 5 ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {currentOrder.cookingTimeLeft}m {isPaused && '(paused)'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};