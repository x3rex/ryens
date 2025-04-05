'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type AnimationType = 'float' | 'wave' | 'bounce' | 'stretch' | 'weight';

interface KineticTextProps {
  text: string;
  type: AnimationType;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  minWeight?: number;
  maxWeight?: number;
  delay?: number;
}

export default function KineticText({
  text,
  type,
  className = '',
  element = 'div',
  minWeight = 100,
  maxWeight = 900,
  delay = 0,
}: KineticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // For variable font weight animation
  const fontWeight = useTransform(scrollYProgress, [0, 1], [minWeight, maxWeight]);
  
  // Split text into characters for animation
  const characters = text.split('');
  
  // Get the appropriate class based on animation type
  const getCharClass = (type: AnimationType) => {
    switch (type) {
      case 'float':
        return 'kinetic-char-float';
      case 'wave':
        return 'kinetic-char-wave';
      case 'bounce':
        return 'kinetic-char-bounce';
      case 'stretch':
        return 'kinetic-text-stretch';
      default:
        return '';
    }
  };
  
  // For variable font weight animation
  useEffect(() => {
    if (type === 'weight' && containerRef.current) {
      const updateFontWeight = () => {
        if (containerRef.current) {
          const weight = fontWeight.get();
          containerRef.current.style.setProperty('--font-weight', weight.toString());
        }
      };
      
      const unsubscribe = fontWeight.onChange(updateFontWeight);
      return () => unsubscribe();
    }
  }, [fontWeight, type]);
  
  // Render based on the element type
  const renderContent = () => {
    if (type === 'weight') {
      return (
        <div ref={containerRef} className="overflow-hidden">
          {React.createElement(
            element,
            { className: `variable-weight-text font-serif ${className}` },
            text
          )}
        </div>
      );
    }
    
    if (type === 'stretch') {
      return (
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className={`kinetic-text-stretch ${className}`}
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay 
            }}
          >
            {text}
          </motion.div>
        </div>
      );
    }
    
    return (
      <div ref={containerRef} className="kinetic-text-container">
        {React.createElement(
          element,
          { className },
          characters.map((char, index) => (
            <motion.span
              key={index}
              className={`kinetic-char ${getCharClass(type)}`}
              style={{ 
                '--char-index': index,
                display: char === ' ' ? 'inline-block' : undefined,
                width: char === ' ' ? '0.5em' : undefined
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: delay + index * 0.04,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))
        )}
      </div>
    );
  };
  
  return renderContent();
} 