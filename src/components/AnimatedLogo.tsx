'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AnimatedLogo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const logo = logoRef.current;
    if (logo) {
      logo.addEventListener('mousemove', handleMouseMove);
      logo.addEventListener('mousedown', handleMouseDown);
      logo.addEventListener('mouseup', handleMouseUp);
      logo.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      if (logo) {
        logo.removeEventListener('mousemove', handleMouseMove);
        logo.removeEventListener('mousedown', handleMouseDown);
        logo.removeEventListener('mouseup', handleMouseUp);
        logo.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, []);

  return (
    <div 
      ref={logoRef}
      className="relative cursor-pointer"
      style={{ 
        transform: isClicking ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.1s ease-out',
        width: '240px',
        height: '80px'
      }}
    >
      <div 
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'all 0.1s ease-out',
          filter: 'blur(2px)',
          opacity: 0.5
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-emerald-600"
        >
          <path d="M20 12V8H6V4H4v4H2v2h2v8H2v2h2v4h2v-4h14v4h2v-4h2v-2h-2v-8h2z" />
        </svg>
      </div>
      <Image
        src="/css-logo-stacked.svg"
        alt="Click.Save.Shop. Logo"
        fill
        className="object-contain"
        priority
        loading="eager"
        decoding="async"
        sizes="240px"
      />
    </div>
  );
} 