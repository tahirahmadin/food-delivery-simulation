import React from 'react';

interface RoadProps {
  direction: 'horizontal' | 'vertical' | 'intersection';
}

export const Road: React.FC<RoadProps> = ({ direction }) => {
  if (direction === 'intersection') {
    return (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return null;
};