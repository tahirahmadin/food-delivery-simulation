import React from 'react';
import { X } from 'lucide-react';
import { useStore } from '../../store/useStore';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InventoryModal: React.FC<InventoryModalProps> = ({ isOpen, onClose }) => {
  const { inventory, refillInventory } = useStore();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-96 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">
            Inventory Status
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {inventory.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border ${
                item.quantity < 3
                  ? 'border-red-200 bg-red-50'
                  : 'border-emerald-100 bg-emerald-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  item.quantity < 3
                    ? 'bg-red-100 text-red-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  Stock: {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => {
              refillInventory();
              onClose();
            }}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Refill All Items
          </button>
        </div>
      </div>
    </div>
  );
};