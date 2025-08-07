'use client';

import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Enhanced smooth scroll behavior with 2x smoother animation
    const smoothScrollTo = (target: string | HTMLElement, duration: number = 1500) => {
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
      if (!targetElement) return;

      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      // Enhanced easing with momentum
      const easeOutQuart = (t: number, b: number, c: number, d: number) => {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Use enhanced easing for smoother animation
        const easedProgress = easeOutQuart(timeElapsed, 0, 1, duration);
        const run = startPosition + (distance * easedProgress);

        window.scrollTo(0, run);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    // Enhanced scroll behavior for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.hostname === window.location.hostname) {
        e.preventDefault();
        const targetId = target.hash;
        // Increased duration for smoother animation
        smoothScrollTo(targetId, 1800);
      }
    };

    // Add event listeners for smooth navigation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Enhanced scroll behavior for programmatic navigation
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (options: ScrollIntoViewOptions = {}) {
      if (options.behavior === 'smooth') {
        smoothScrollTo(this as HTMLElement, 1500);
        return;
      }
      return originalScrollIntoView.call(this, options);
    };

    // Cleanup function
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
