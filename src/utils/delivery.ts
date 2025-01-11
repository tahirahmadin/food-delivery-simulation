export function calculateTimeLeft(
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

  // Apply weather multiplier only for adverse conditions
  if (weather === 'rainy') {
    totalTime = Math.ceil(totalTime * 1.5); // 50% increase for rainy weather
  } else if (weather === 'stormy') {
    totalTime = Math.ceil(totalTime * 2.0); // 100% increase for stormy weather
  }
  return totalTime;
}