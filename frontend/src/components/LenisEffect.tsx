'use client'
import { useLayoutEffect } from "react";
import Lenis from 'lenis';

export default function LenisEffect() {
  useLayoutEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return null;
};

