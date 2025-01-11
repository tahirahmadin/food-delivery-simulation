import React, { useState } from 'react';
import { Package } from 'lucide-react';
import { InventoryModal } from './InventoryModal';
import { useStore } from '../../store/useStore';

export const InventoryButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { inventory } = useStore();
  
  const lowStockCount = inventory.filter(item => item.quantity < 3).length;
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative bg-gradient-to-r from-emerald-500 to-green-500 text-white p-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <Package className="w-5 h-5" />
        {lowStockCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
            {lowStockCount}
          </span>
        )}
      </button>
      
      <InventoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};