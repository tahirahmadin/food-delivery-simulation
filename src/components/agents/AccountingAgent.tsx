import React from 'react';
import { useStore } from '../../store/useStore';
import { Receipt, CreditCard, DollarSign, Pizza } from 'lucide-react';

export const AccountingAgent: React.FC = () => {
  const { orders, totalRevenue, totalPizzasDelivered } = useStore();
  
  // Calculate completed orders (delivered or completed)
  const completedOrders = orders.filter(order => 
    order.status === 'delivered' || 
    order.status === 'completed'
  );

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-3 rounded-xl shadow-lg border border-amber-500/20">
      <div className="flex items-center gap-2 mb-3">
        <Receipt className="w-6 h-6 text-amber-500" />
        <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">
          Accounting Agent
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Total Orders */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-amber-500/20">
          <div className="flex items-center gap-2 mb-1">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] text-amber-300">Delivered Orders</span>
          </div>
          <div className="text-lg font-bold text-amber-400 tabular-nums">
            {completedOrders.length}
          </div>
        </div>

        {/* Delivery Rate */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-amber-500/20">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] text-amber-300">Total Revenue</span>
          </div>
          <div className="text-lg font-bold text-amber-400 tabular-nums">
            ${totalRevenue.toFixed(2)}
          </div>
        </div>
        
        {/* Total Pizzas */}
        <div className="col-span-2 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-amber-500/20">
          <div className="flex items-center gap-2 mb-1">
            <Pizza className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] text-amber-300">Total Pizzas Delivered</span>
          </div>
          <div className="text-lg font-bold text-amber-400 tabular-nums">
            {totalPizzasDelivered}
          </div>
        </div>
      </div>
    </div>
  );
};