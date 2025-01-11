import React from "react";
import { GridMap } from "./map/GridMap";
import { SimulationControls } from "./SimulationControls";

export const Map: React.FC = () => {
  return (
    <div className="relative h-[400px] w-[400px] mx-auto">
      <GridMap />
      <SimulationControls className="absolute bottom-4 left-4" />
    </div>
  );
};
