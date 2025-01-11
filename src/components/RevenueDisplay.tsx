import React from 'react';
import { Wallet } from 'lucide-react';
import { useStore } from '../store/useStore';

export const RevenueDisplay: React.FC = () => {
  const { totalRevenue } = useStore();
  
  return (
    <div className="flex items-center gap-2 bg-purple-500/90 text-white px-3 py-1.5 rounded-lg">
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-semibold">${totalRevenue}</span>
    </div>
  );
};