import React from 'react';
import { useStore } from '../../store/useStore';
import { useEffect } from 'react';

interface DeliveryBikeProps {
  progress: number;
  paths: Array<{ start: number[]; end: number[] }>;
  isReturning?: boolean;
  orderId?: string;
}

export const DeliveryBike: React.FC<DeliveryBikeProps> = ({ progress, paths, isReturning = false, orderId }) => {
  const { weather, startReturnJourney } = useStore();
  const [x, y] = calculatePosition(progress, paths, isReturning);
  const rotation = calculateRotation(paths, isReturning);
  
  return (
    <div 
      className="absolute transition-all duration-100"
      {...(orderId && { 'data-order-id': orderId })}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      <div className="relative">
        <img
          src="https://gobbl-bucket.s3.ap-south-1.amazonaws.com/tapAssets/gobblai/bike.png"
          alt="Delivery Bike"
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};

function calculateTimeLeft(
  progress: number, 
  paths: Array<{ start: number[]; end: number[] }>,
  weather: string
): number {
  const totalSegments = paths.length;
  const progressPerSegment = 100 / totalSegments;
  const currentSegment = Math.min(Math.floor(progress / progressPerSegment), totalSegments - 1);
  const remainingSegments = totalSegments - currentSegment - 1;
  
  // Calculate base time
  const remainingFullSegmentsTime = remainingSegments * 10;
  const segmentProgress = (progress % progressPerSegment) / progressPerSegment;
  const currentSegmentTimeLeft = Math.ceil((1 - segmentProgress) * 10);
  let totalTime = remainingFullSegmentsTime + currentSegmentTimeLeft;

  // Apply weather multiplier
  if (weather === 'rainy') {
    totalTime = Math.ceil(totalTime * 1.5); // 50% increase for rainy weather
  } else if (weather === 'stormy') {
    totalTime = Math.ceil(totalTime * 2.0); // 100% increase for stormy weather
  }
  
  return totalTime;
}

function calculatePosition(
  progress: number, 
  paths: Array<{ start: number[]; end: number[] }>, 
  isReturning: boolean
) {
  const activePaths = isReturning ? paths.slice().reverse().map(path => ({
    start: path.end,
    end: path.start
  })) : paths;

  const totalSegments = activePaths.length;
  const progressPerSegment = 100 / totalSegments;
  const currentSegmentIndex = Math.min(
    Math.floor(progress / progressPerSegment),
    totalSegments - 1
  );
  
  const segmentProgress = (progress % progressPerSegment) / progressPerSegment * 100;
  const currentPath = activePaths[currentSegmentIndex];
  
  const [startX, startY] = currentPath.start;
  const [endX, endY] = currentPath.end;
  
  const x = startX + (endX - startX) * (segmentProgress / 100);
  const y = startY + (endY - startY) * (segmentProgress / 100);
  
  return [x, y];
}

function calculateRotation(
  paths: Array<{ start: number[]; end: number[] }>,
  isReturning: boolean
): number {
  // Get the first path segment
  const path = isReturning ? paths[paths.length - 1] : paths[0];
  const [startX, startY] = isReturning ? path.end : path.start;
  const [endX, endY] = isReturning ? path.start : path.end;
  
  // Calculate angle based on direction
  if (startX === endX) {
    // Vertical movement
    return endY > startY ? 270 : 90 ; // Down: 180deg, Up: 0deg
  } else {
    // Horizontal movement
    return endX > startX ? 180 : 0; // Right: 90deg, Left: 270deg
  }
}
const DELIVERY_PATHS = {
  'Habib House': [
    { start: [50, 50], end: [50, 100] }
  ],
  'Salman House': [
    { start: [50, 50], end: [0, 50] }
  ],
  'Ashwin House': [
    { start: [50, 50], end: [50, 0] }
  ]
}