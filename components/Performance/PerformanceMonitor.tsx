"use client";

import { useEffect } from 'react';

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
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcpEntry = entry as LargestContentfulPaint;
            console.log('LCP:', lcpEntry.startTime);
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'LCP', {
                value: Math.round(lcpEntry.startTime),
                event_category: 'Web Vitals',
                event_label: lcpEntry.name,
              });
            }
          }

          if (entry.entryType === 'first-input') {
            const fidEntry = entry as FirstInputDelay;
            const fidValue = fidEntry.processingStart - fidEntry.startTime;
            console.log('FID:', fidValue);
            if (window.gtag) {
              window.gtag('event', 'FID', {
                value: Math.round(fidValue),
                event_category: 'Web Vitals',
                event_label: fidEntry.name,
              });
            }
          }

          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as LayoutShift;
            console.log('CLS:', clsEntry.value);
            if (window.gtag) {
              window.gtag('event', 'CLS', {
                value: clsEntry.value,
                event_category: 'Web Vitals',
                event_label: clsEntry.name,
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log('Page Load Time:', loadTime);

          if (window.gtag) {
            window.gtag('event', 'page_load_time', {
              value: Math.round(loadTime),
              event_category: 'Performance',
            });
          }
        }
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor; 