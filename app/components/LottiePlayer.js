"use client";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottiePlayer({ animationData }) {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => anim.destroy();  // Clean up
  }, [animationData]);

  return (
    <div ref={container} style={{ width: '100%', height: '100%' }} />
  );
}
