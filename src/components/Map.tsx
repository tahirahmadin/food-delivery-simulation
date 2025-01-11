import React from 'react';
import { GridMap } from './map/GridMap';

export const Map: React.FC = () => {
  return (
    <div className="h-full w-full">
      <GridMap />
    </div>
  );
};