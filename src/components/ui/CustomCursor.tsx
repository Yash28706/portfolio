import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailing({ x: e.clientX, y: e.clientY });
      }, 80);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-cyber-neon"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${
            isPointer ? 1.8 : 1
          })`,
        }}
      />
      {/* Trailing Aura */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-pink-400/60 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${trailing.x - 16}px, ${trailing.y - 16}px, 0) scale(${
            isPointer ? 2.2 : 1
          })`,
        }}
      />
    </>
  );
};
