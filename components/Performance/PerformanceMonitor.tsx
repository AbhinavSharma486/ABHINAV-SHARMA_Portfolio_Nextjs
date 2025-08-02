"use client";

import { useEffect, useRef } from 'react';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      parameters: {
        value?: number;
        event_category?: string;
        event_label?: string;
      }
    ) => void;
  }
}

// Type definitions for Performance API entries
interface LargestContentfulPaint extends PerformanceEntry {
  startTime: number;
  size: number;
  id: string;
  url?: string;
  element?: Element;
}

interface FirstInputDelay extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  startTime: number;
  target?: Element;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  sources?: Array<{
    node?: Node;
    currentRect?: DOMRectReadOnly;
    previousRect?: DOMRectReadOnly;
  }>;
}

const PerformanceMonitor: React.FC = () => {
  const observerRef = useRef<PerformanceObserver | null>(null);
  const hasReported = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    // Debounced reporting function
    const debouncedReport = (() => {
      let timeoutId: NodeJS.Timeout;
      return (eventName: string, value: number, category: string, label?: string) => {
        if (hasReported.current.has(eventName)) return;

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (window.gtag) {
            window.gtag('event', eventName, {
              value: Math.round(value),
              event_category: category,
              event_label: label,
            });
            hasReported.current.add(eventName);
          }
        }, 100);
      };
    })();

    // Monitor Core Web Vitals with reduced overhead
    try {
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();

        for (const entry of entries) {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              const lcpEntry = entry as LargestContentfulPaint;
              debouncedReport('LCP', lcpEntry.startTime, 'Web Vitals', lcpEntry.name);
              break;

            case 'first-input':
              const fidEntry = entry as FirstInputDelay;
              const fidValue = fidEntry.processingStart - fidEntry.startTime;
              debouncedReport('FID', fidValue, 'Web Vitals', fidEntry.name);
              break;

            case 'layout-shift':
              const clsEntry = entry as LayoutShift;
              debouncedReport('CLS', clsEntry.value * 1000, 'Web Vitals', clsEntry.name);
              break;
          }
        }
      });

      observerRef.current.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
      });

      // Monitor page load time once
      const handleLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          debouncedReport('page_load_time', loadTime, 'Performance');
        }
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad, { once: true });
      }

    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
};

export default PerformanceMonitor; 