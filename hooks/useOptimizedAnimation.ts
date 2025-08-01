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