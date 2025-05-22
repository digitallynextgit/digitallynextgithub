'use client';

import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Create a type definition that matches the properties documented in Lenis
interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  wheelMultiplier?: number;
  lerp?: number;
  wrapper?: HTMLElement | Window;
  content?: HTMLElement;
  eventsTarget?: HTMLElement | Window;
  infinite?: boolean;
  autoResize?: boolean;
  prevent?: (node: HTMLElement) => boolean;
  virtualScroll?: (e: { deltaX: number; deltaY: number; event: WheelEvent | TouchEvent }) => boolean;
  overscroll?: boolean;
  autoRaf?: boolean;
  anchors?: boolean | ScrollToOptions;
  autoToggle?: boolean;
  allowNestedScroll?: boolean;
  smooth?: boolean;
  direction?: 'vertical' | 'horizontal';
  gestureDirection?: 'vertical' | 'horizontal' | 'both';
}

// Define a proper type for Lenis scroll options
interface LenisScrollOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  lock?: boolean;
  force?: boolean;
  onComplete?: () => void;
}

let lenis: Lenis | null = null;

export function useLenis() {
  const [instance, setInstance] = useState<Lenis | null>(lenis);

  useEffect(() => {
    if (!lenis) {
      const options: LenisOptions = {
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        lerp: 0.1,
      };

      lenis = new Lenis(options);

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);
      setInstance(lenis);
    }

    return () => {
      // Don't destroy the instance here to keep it available globally
      // Only destroy on full app unmount or page refresh
    };
  }, []);

  return instance;
}

// Helper to scroll to a specific element or position
export function scrollTo(target: string | HTMLElement | number, options?: LenisScrollOptions) {
  if (lenis) {
    lenis.scrollTo(target, options);
  } else {
    console.warn('Lenis is not initialized yet');
  }
}

// Cleanup function to be called on app unmount if needed
export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
