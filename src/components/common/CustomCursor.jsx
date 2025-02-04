'use client';

import { useEffect, useState, useRef } from 'react';
import '../../styles/cursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-interact]');
    const cursor = cursorRef.current;

    const handleHoverStart = () => cursor?.classList.add('cursor-hover');
    const handleHoverEnd = () => cursor?.classList.remove('cursor-hover');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleHoverStart);
      element.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverStart);
        element.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="custom-cursor" 
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="cursor-dot"></div>
    </div>
  );
}