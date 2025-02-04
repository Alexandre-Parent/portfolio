'use client';

import React, { useRef, useEffect, useState } from 'react';
import anime from 'animejs';

interface ScrollingBannersProps {
  topWords: string[];
  bottomWords: string[];
}

const ScrollingBanners = ({ topWords, bottomWords }: ScrollingBannersProps) => {
  const topBannerRef = useRef<HTMLDivElement>(null);
  const bottomBannerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!topBannerRef.current || !bottomBannerRef.current) return;

    const topBanner = topBannerRef.current;
    const bottomBanner = bottomBannerRef.current;

    const topAnimation = anime({
      targets: topBanner,
      translateX: '-50%',
      duration: 190000,
      easing: 'linear',
      loop: true
    });

    const bottomAnimation = anime({
      targets: bottomBanner,
      translateX: ['-50%', '0%'],
      duration: 190000,
      easing: 'linear',
      loop: true
    });

    return () => {
      topAnimation.pause();
      bottomAnimation.pause();
    };
  }, [topWords, bottomWords]);

  const calculateRepetitions = (words: string[]) => {
    const wordWidth = 100 * words.length;
    const repetitions = Math.ceil(windowWidth / wordWidth) + 6;
    return Array(repetitions).fill(words).flat();
  };

  return (
    <div className="w-full overflow-visible bg-white py-8">
      {/* Ligne supérieure - Noir */}
      <div 
        ref={topBannerRef} 
        className="flex whitespace-nowrap mb-4"
        style={{ 
          display: 'inline-flex', 
          width: 'fit-content' 
        }}
      >
        {calculateRepetitions(topWords).map((word, index) => (
          <span
            key={`top-${index}`}
            className="mx-8 text-[45px] md:text-[100px] font-black uppercase text-black leading-none"
          >
            {word}
          </span>
        ))}
      </div>

      {/* Ligne inférieure - Blanc avec contour noir */}
      <div 
        ref={bottomBannerRef} 
        className="flex whitespace-nowrap"
        style={{ 
          display: 'inline-flex', 
          width: 'fit-content' 
        }}
      >
        {calculateRepetitions(bottomWords).map((word, index) => (
          <span
            key={`bottom-${index}`}
            className="mx-8 text-[45px] md:text-[100px] font-black uppercase leading-none"
            style={{
              color: 'white',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000
              `
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanners;