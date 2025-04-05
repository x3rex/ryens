'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    content: 'RYENS transformed our digital presence completely. Their team delivered a stunning website and effective marketing strategy that increased our leads by 200%. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, EcoShop',
    content: 'Working with RYENS on our e-commerce platform was a game-changer. They understood our vision perfectly and created a solution that exceeded our expectations. Our sales have increased by 150% since launch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Williams',
    position: 'Marketing Director, InnovateCorp',
    content: 'The digital marketing campaign RYENS created for us delivered exceptional results. Their team is creative, responsive, and truly understands how to drive engagement and conversions.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'Entrepreneur',
    content: 'RYENS helped me launch my Amazon FBA business with great success. Their expertise in the platform and strategic approach made all the difference. I\'m now scaling my business thanks to their guidance.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Navigation functions
  const goToPrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  return (
    <section className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        
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
            <h2 className="heading-lg mb-6">Client <span className="gradient-text">Testimonials</span></h2>
            <p className="text-lg text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-effect p-8 md:p-10 rounded-3xl neon-border"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-8 italic">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-300">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <motion.button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:text-indigo-300 transition-colors"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setActiveIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-gradient-to-r from-indigo-500 to-purple-500 w-10' : 'bg-gray-600 w-2.5 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={goToNext}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:text-indigo-300 transition-colors"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 