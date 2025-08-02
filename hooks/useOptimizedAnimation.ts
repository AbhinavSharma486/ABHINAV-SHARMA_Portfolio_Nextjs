import { useCallback, useRef } from 'react';

interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

interface IntersectionConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useOptimizedAnimation = (config: AnimationConfig = {}) => {
  const {
    duration = 0.6,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
  } = config;

  const elementRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!elementRef.current || hasAnimated.current) return;

    hasAnimated.current = true;
    elementRef.current.style.transition = `all ${duration}s ${easing} ${delay}s`;
    elementRef.current.style.opacity = '1';
    elementRef.current.style.transform = 'translateY(0)';
  }, [duration, easing, delay]);

  const reset = useCallback(() => {
    if (!elementRef.current) return;

    hasAnimated.current = false;
    elementRef.current.style.opacity = '0';
    elementRef.current.style.transform = 'translateY(20px)';
  }, []);

  return {
    elementRef,
    animate,
    reset,
    hasAnimated: hasAnimated.current
  };
};

export const useIntersectionObserver = (config: IntersectionConfig = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = config;

  const elementRef = useRef<HTMLElement>(null);
  const isIntersecting = useRef(false);

  const observe = useCallback((callback: () => void) => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isIntersecting.current) {
            isIntersecting.current = true;
            callback();

            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!entry.isIntersecting && !triggerOnce) {
            isIntersecting.current = false;
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return {
    elementRef,
    observe,
    isIntersecting: isIntersecting.current
  };
};

export const useReducedMotion = () => {
  const prefersReducedMotion = useRef(false);

  if (typeof window !== 'undefined') {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  return prefersReducedMotion.current;
};

export const useThrottledCallback = <T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
) => {
  const lastCall = useRef(0);
  const lastCallTimer = useRef<NodeJS.Timeout | undefined>(undefined);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    } else {
      if (lastCallTimer.current) {
        clearTimeout(lastCallTimer.current);
      }
      lastCallTimer.current = setTimeout(() => {
        lastCall.current = Date.now();
        callback(...args);
      }, delay - (now - lastCall.current));
    }
  }, [callback, delay]);
}; 