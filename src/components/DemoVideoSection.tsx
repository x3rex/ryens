'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiPlay, FiPause, FiMaximize, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const toggleFullscreen = () => {
    if (videoRef.current && typeof document !== 'undefined') {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };
  
  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-lg mb-6">Watch Our <span className="gradient-text">Demo</span></h2>
            <p className="text-lg text-gray-300 mb-8">
              See how RYENS can transform your business with our cutting-edge digital solutions.
            </p>
          </motion.div>
        </div>
        
        {/* Video Container */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto neon-border rounded-2xl overflow-hidden"
        >
          {/* Video Placeholder - Replace with your actual video */}
          <div className="aspect-video bg-black relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/video-poster.jpg"
              muted
              playsInline
              loop
            >
              {/* Replace with your actual video source */}
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-indigo-600/80 text-white flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.9)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlay className="w-8 h-8 ml-1" />
                </motion.button>
              </motion.div>
            )}
            
            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
              <motion.button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5 ml-0.5" />}
              </motion.button>
              
              <div className="flex space-x-2">
                <motion.button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? <FiVolumeX className="w-5 h-5" /> : <FiVolume2 className="w-5 h-5" />}
                </motion.button>
                
                <motion.button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMaximize className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {['Innovative UI/UX', 'Seamless Integration', 'Performance Optimized'].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{feature}</h3>
              <p className="text-gray-300">
                Experience the power of our {feature.toLowerCase()} solutions that drive real business results.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 