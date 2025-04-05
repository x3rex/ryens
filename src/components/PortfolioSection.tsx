'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Ecommerce',
    description: 'A fully responsive e-commerce platform with advanced filtering, search, and payment integration.',
    image: '/images/portfolio-placeholder-1.jpg',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'App Development',
    description: 'A secure and user-friendly mobile banking application with biometric authentication.',
    image: '/images/portfolio-placeholder-2.jpg',
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'A comprehensive digital marketing campaign that increased client conversion rates by 150%.',
    image: '/images/portfolio-placeholder-3.jpg',
  },
  {
    id: 4,
    title: 'Amazon FBA Strategy',
    category: 'Amazon FBA',
    description: 'An Amazon FBA strategy that helped a client achieve 200% growth in sales within 6 months.',
    image: '/images/portfolio-placeholder-4.jpg',
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'App Development',
    description: 'A modern SaaS dashboard with real-time analytics and customizable widgets.',
    image: '/images/portfolio-placeholder-5.jpg',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'A viral social media campaign that generated over 1 million impressions.',
    image: '/images/portfolio-placeholder-6.jpg',
  },
];

// Categories for filtering
const categories = ['All', 'Digital Marketing', 'App Development', 'Ecommerce', 'Amazon FBA'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px]"></div>
        
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
            <h2 className="heading-lg mb-6">Our <span className="gradient-text">Portfolio</span></h2>
            <p className="text-lg text-gray-300 mb-10">
              Explore our recent projects and see how we've helped businesses achieve their goals.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'glass-effect text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group overflow-hidden neon-border rounded-3xl"
              whileHover={{ y: -10 }}
            >
              {/* Project Image (Placeholder) */}
              <div className="h-48 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>
                <span className="text-xl font-bold text-white relative z-10">{project.title}</span>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-400 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" className="btn-primary px-6 py-2.5 rounded-full text-sm">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
} 