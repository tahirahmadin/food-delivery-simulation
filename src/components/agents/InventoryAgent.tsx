import React from 'react';
import { useStore } from '../../store/useStore';

export const InventoryAgent: React.FC = () => {
  const { inventory, refillInventory } = useStore();

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50 p-4 rounded-xl shadow-lg border border-emerald-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
          Inventory Agent
        </h2>
        <button
          onClick={refillInventory}
          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg hover:from-emerald-600 hover:to-green-600 shadow-sm hover:shadow-md transition-all duration-200"
        >
          Refill Inventory
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {inventory.map((item, idx) => (
          <div key={idx} className="bg-white/50 backdrop-blur-sm p-3 rounded-lg border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="font-medium text-emerald-900">{item.name}</div>
            <div className="text-sm text-emerald-600/80">
              Stock: {item.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};