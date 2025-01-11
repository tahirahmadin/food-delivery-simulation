import React from 'react';
import { Home, Building2 } from 'lucide-react';

interface LocationCardProps {
  name: string;
  type: 'home' | 'restaurant' | 'office';
  isActive?: boolean;
}

export const LocationCard: React.FC<LocationCardProps> = ({ name, type, isActive = true }) => {
  const statusColor = isActive ? 'bg-green-500' : 'bg-red-500';
  const bgColor = type === 'office' ? 'bg-blue-100' : 'bg-orange-100';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-${type === 'office' ? 'blue' : 'orange'}-600 font-medium`}>
            {name}
          </span>
          <div className={`w-2 h-2 rounded-full ${statusColor}`} />
        </div>
        <div className={`${bgColor} rounded-lg p-8 flex justify-center items-center`}>
          {type === 'office' ? (
            <Building2 className="w-12 h-12 text-blue-600" />
          ) : (
            <Home className={`w-12 h-12 ${type === 'restaurant' ? 'text-red-600' : 'text-orange-600'}`} />
          )}
        </div>
      </div>
    </div>
  );
};