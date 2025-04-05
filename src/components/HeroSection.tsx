'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BackgroundVideo from './BackgroundVideo';
import { FiArrowDown } from 'react-icons/fi';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Slower parallax for text
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Using local video file
  const videoUrl = "/videos/ww.mp4";
  const fallbackImageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070";
  
  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      {/* Background Video */}
      <BackgroundVideo 
        videoUrl={videoUrl}
        fallbackImageUrl={fallbackImageUrl}
        overlayOpacity={0.65} // Increased overlay opacity for better contrast
        className="z-0"
      />
      
      {/* Content Container with subtle backdrop blur */}
      <motion.div 
        className="container relative z-10 mx-auto px-4 py-16 md:py-24"
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <motion.span 
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-text leading-tight"
            initial={{ backgroundPosition: '200% center' }}
            animate={{ backgroundPosition: '0% center' }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            Digital Solutions
          </motion.span>
          <span className="block text-white mt-1 md:mt-2 text-shadow-soft">
            for 2025
          </span>
        </h1>
        
        {/* Sub-headline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mt-6 mb-10 text-shadow-soft"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We craft cutting-edge digital experiences that elevate your brand and drive growth in the modern era.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            href="#services" 
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 transform"
          >
            Explore Services
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-base hover:bg-white/20 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={() => {
          const nextSection = document.getElementById('about'); // Assuming next section has id='about'
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-white/70 text-sm mb-1">Explore</span>
        <motion.div 
          className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-white/70"/>
        </motion.div>
      </motion.div>
    </section>
  );
} 