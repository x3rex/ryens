'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const values = [
  {
    id: 1,
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver innovative solutions.',
    icon: <FiTarget className="w-6 h-6" />,
    delay: 0.1,
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, ensuring the highest quality in our deliverables.',
    icon: <FiAward className="w-6 h-6" />,
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Client-Centric',
    description: 'We put our clients at the center of our work, focusing on their needs and success.',
    icon: <FiUsers className="w-6 h-6" />,
    delay: 0.3,
  },
  {
    id: 4,
    title: 'Results-Driven',
    description: 'We are committed to delivering measurable results that drive business growth.',
    icon: <FiTrendingUp className="w-6 h-6" />,
    delay: 0.4,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-lg mb-6">About <span className="gradient-text">RYENS</span></h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2010, RYENS has been at the forefront of digital innovation, helping businesses transform and thrive in the digital landscape.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our team of experts combines technical expertise with creative thinking to deliver solutions that drive real business results. We're passionate about technology and committed to helping our clients succeed.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              With over a decade of experience, we've worked with businesses of all sizes across various industries, from startups to established enterprises.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#services" className="btn-primary px-6 py-2.5 rounded-full text-sm">
                Our Services
              </a>
              <a href="#contact" className="btn-outline px-6 py-2.5 rounded-full text-sm">
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: value.delay }}
                className="glass-effect p-6 rounded-3xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 