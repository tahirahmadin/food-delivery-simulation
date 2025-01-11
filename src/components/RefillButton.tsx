import React from 'react';
import { PackagePlus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Snackbar } from './ui/Snackbar';

export const RefillButton: React.FC = () => {
  const { refillInventory, showSnackbar } = useStore();
  
  const handleClose = () => {
    useStore.setState({ showSnackbar: false });
  };
  
  return (
    <>
      <button
        onClick={refillInventory}
        className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-2 rounded-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <PackagePlus className="w-5 h-5" />
      </button>
      
      {showSnackbar && (
        <Snackbar 
          message="Inventory has been refilled successfully!" 
          onClose={handleClose}
        />
      )}
    </>
  );
};