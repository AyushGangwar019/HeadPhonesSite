// src/hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // easing factor (0 < lerp <= 1)
      smooth: true, // enable smooth scrolling
    });

    const onScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
