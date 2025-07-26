'use client';

import { useEffect, useState } from 'react';
import { usePerformanceMonitor } from '../hooks/useOptimizedAnimation';

const PerformanceMonitor = () => {
  const { fps, memoryUsage } = usePerformanceMonitor();
  const [isVisible, setIsVisible] = useState(false);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    // Measure page load time
    if (typeof window !== 'undefined') {
      const loadTime = performance.now();
      setLoadTime(Math.round(loadTime));
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="space-y-1">
        <div>FPS: {fps}</div>
        <div>Memory: {memoryUsage}MB</div>
        <div>Load: {loadTime}ms</div>
        <div className="text-green-400">Dev Mode</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor; 