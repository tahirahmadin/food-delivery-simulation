import React from 'react';
import { Home, Store } from 'lucide-react';

type LocationType = 'home' | 'restaurant' | 'road' | 'empty';

interface GridCellProps {
  type: LocationType;
  label?: string;
}

export const GridCell: React.FC<GridCellProps> = ({ type, label }) => {
  const baseClasses = "w-full h-full flex flex-col items-center justify-center p-2";
  
  switch (type) {
    case 'home':
      return (
        <div className={`${baseClasses} bg-blue-500 rounded-lg`}>
          <Home className="w-8 h-8 text-white" />
          <span className="text-sm mt-1 text-white">{label}</span>
        </div>
      );
    case 'restaurant':
      return (
        <div className={`${baseClasses} bg-red-500 rounded-lg`}>
          <Store className="w-8 h-8 text-white" />
          <span className="text-sm mt-1 text-white">{label}</span>
        </div>
      );
    case 'road':
      return <div className="w-full h-full bg-gray-600" />;
    default:
      return <div className="w-full h-full bg-gray-800" />;
  }
};