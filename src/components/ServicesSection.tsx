'use client';

import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiShoppingCart, FiPackage, FiArrowRight } from 'react-icons/fi';
import LottieAnimation from './LottieAnimation';

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  delay: number;
  animationPath: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'Strategic campaigns driving traffic, leads, and conversions for measurable growth.',
    icon: <FiMonitor className="w-7 h-7" />,
    color: 'blue',
    delay: 0.1,
    animationPath: '/animations/digital-marketing.json'
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Custom mobile applications for iOS & Android focused on exceptional user experience.',
    icon: <FiSmartphone className="w-7 h-7" />,
    color: 'purple',
    delay: 0.2,
    animationPath: '/animations/app-development.json'
  },
  {
    id: 3,
    title: 'Ecommerce Solutions',
    description: 'End-to-end ecommerce platforms designed to maximize your online sales effectively.',
    icon: <FiShoppingCart className="w-7 h-7" />,
    color: 'pink',
    delay: 0.3,
    animationPath: '/animations/digital-marketing.json' // Reusing animation for demo
  },
  {
    id: 4,
    title: 'Amazon FBA',
    description: 'Comprehensive FBA strategies to boost product visibility and dominate the marketplace.',
    icon: <FiPackage className="w-7 h-7" />,
    color: 'blue',
    delay: 0.4,
    animationPath: '/animations/app-development.json' // Reusing animation for demo
  },
];

// Define props for ServiceCard
interface ServiceCardProps {
  service: Service;
  animationData: any; // Keeping this as any for now, as Lottie types can be complex
}

function ServiceCard({ service, animationData }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = event;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  
  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.15), transparent 80%)`;
  
  return (
    <motion.div
      ref={cardRef}
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative p-6 bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
      onMouseMove={handleMouseMove}
      style={{ background }}
    >
      {/* Lottie Animation or Icon */}
      <div className="h-32 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {animationData ? (
          <LottieAnimation 
            animationData={animationData} 
            className="w-28 h-28"
          />
        ) : (
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-${service.color}-500/10 to-${service.color}-600/10 text-${service.color}-400`}>
            {service.icon}
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold font-serif mb-3 text-white">{service.title}</h3>
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>
      <div className="mt-auto">
        <a 
          href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
          className="inline-flex items-center font-medium text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
        >
          Learn more 
          <FiArrowRight className="w-3 h-3 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1"/>
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [animationDataMap, setAnimationDataMap] = useState<{[key: string]: any}>({});
  
  // Load animation data
  useEffect(() => {
    const loadAnimations = async () => {
      const loadedData: {[key: string]: any} = {};
      for (const service of services) {
        try {
          const response = await fetch(service.animationPath);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          loadedData[service.id] = data;
        } catch (error) {
          console.error(`Failed to load animation for ${service.title}:`, error);
        }
      }
      setAnimationDataMap(loadedData);
    };
    
    loadAnimations();
  }, []);
  
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px] opacity-50"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[120px] opacity-50"
          animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-lg mb-4 text-shadow-soft">Our Core Services</h2>
            <p className="text-lg text-gray-300 text-shadow-soft">
              Driving digital transformation with expertise across key technology domains.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              animationData={animationDataMap[service.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 