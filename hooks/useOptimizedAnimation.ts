import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  disableOnMobile?: boolean;
}

export const useOptimizedAnimation = (options: AnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    disableOnMobile = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if device is mobile and disableOnMobile is true
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || (disableOnMobile && isMobile)) {
      setShouldAnimate(false);
      setIsVisible(true); // Show content immediately
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, disableOnMobile]);

  return {
    elementRef,
    isVisible: shouldAnimate ? isVisible : true,
    shouldAnimate,
  };
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor FPS
      let frameCount = 0;
      let lastTime = performance.now();

      const measureFPS = () => {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime - lastTime >= 1000) {
          const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          setPerformanceMetrics(prev => ({ ...prev, fps }));
          frameCount = 0;
          lastTime = currentTime;
        }

        requestAnimationFrame(measureFPS);
      };

      requestAnimationFrame(measureFPS);

      // Monitor memory usage (if available)
      if ('memory' in performance) {
        const memoryInterval = setInterval(() => {
          const memory = (performance as any).memory;
          setPerformanceMetrics(prev => ({
            ...prev,
            memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          }));
        }, 1000);

        return () => clearInterval(memoryInterval);
      }
    }
  }, []);

  return performanceMetrics;
}; 