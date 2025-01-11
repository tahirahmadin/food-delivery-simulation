import React from 'react';
import { Pizza } from 'lucide-react';
import { useStore } from '../store/useStore';

export const OrderButton: React.FC = () => {
  const { simulateOrder } = useStore();

  return (
    <button
      onClick={simulateOrder}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3 text-lg font-bold"
    >
      <Pizza className="w-7 h-7" strokeWidth={2.5} />
      Order Now
    </button>
  );
};