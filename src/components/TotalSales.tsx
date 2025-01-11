import React from 'react';
import { DollarSign } from 'lucide-react';
import { useStore } from '../store/useStore';

export const TotalSales: React.FC = () => {
  const { totalRevenue } = useStore();
  const [prevRevenue, setPrevRevenue] = React.useState(totalRevenue);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [dailyOrders, setDailyOrders] = React.useState(0);
  const [averageOrderValue, setAverageOrderValue] = React.useState(0);

  React.useEffect(() => {
    if (totalRevenue > prevRevenue) {
      setIsAnimating(true);
      setDailyOrders(prev => prev + 1);
      setAverageOrderValue(totalRevenue / (dailyOrders + 1));
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      setPrevRevenue(totalRevenue);
      return () => clearTimeout(timer);
    }
  }, [totalRevenue, prevRevenue, dailyOrders]);
  
  return (
    <div 
      className={`total-sales-component relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 transition-all duration-300 hover:shadow-xl ${
        isAnimating ? 'animate-pulse' : ''
      }`}
    >
      <DollarSign className="w-4 h-4" />
      <div className="min-w-[80px]">
        <div className="text-[10px] opacity-80">Total Sales</div>
        <div className="font-bold text-sm relative flex items-center">
          <span className="relative z-10 tabular-nums tracking-tight">${totalRevenue.toFixed(2)}</span>
          {isAnimating && (
            <span className="ml-1.5 text-[10px] text-green-200 animate-fade-in">
              +${(totalRevenue - prevRevenue).toFixed(2)}
            </span>
          )}
        </div>
      </div>
      {isAnimating && (
        <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse" />
      )}
    </div>
  );
};