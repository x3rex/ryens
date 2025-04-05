'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BackgroundVideoProps {
  videoUrl: string;
  fallbackImageUrl?: string;
  overlayOpacity?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

export default function BackgroundVideo({
  videoUrl,
  fallbackImageUrl,
  overlayOpacity = 0.7,
  className = '',
  objectFit = 'cover',
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const handleCanPlay = () => {
      setIsLoaded(true);
      console.log('Video can play now');
    };
    
    const handleError = (e: Event) => {
      console.error('Error loading video:', e);
      setIsError(true);
    };
    
    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('error', handleError);
    
    // Attempt to play the video
    const playVideo = async () => {
      try {
        await videoElement.play();
        console.log('Video playing');
      } catch (error) {
        console.warn('Auto-play was prevented:', error);
        // We'll still show the video, but it won't auto-play
      }
    };
    
    playVideo();
    
    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('error', handleError);
    };
  }, [videoUrl]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {!isError ? (
        <motion.video
          ref={videoRef}
          className={`absolute w-full h-full object-${objectFit}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          playsInline
          muted
          loop
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ) : fallbackImageUrl ? (
        <motion.img
          src={fallbackImageUrl}
          alt="Background"
          className={`absolute w-full h-full object-${objectFit}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      ) : null}
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"
        style={{ opacity: overlayOpacity }}
      ></div>
    </div>
  );
} 