'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-dark-DEFAULT"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full filter blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container relative z-10">
        {/* Scroll to top button */}
        <div className="flex justify-center -mb-10">
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white hover:text-indigo-300 transition-colors"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text">
              RYENS
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative digital solutions. We specialize in Digital Marketing, App Development, Ecommerce, and Amazon FBA.
            </p>
            <p className="text-gray-400 mb-6 italic">
              Led by CEO, Ragib Neyaz Rafi
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors" 
                aria-label="Twitter"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FiTwitter size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors" 
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FiInstagram size={18} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/ryensdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-colors" 
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FiFacebook size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#digital-marketing" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#app-development" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#ecommerce" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Ecommerce Solutions
                </Link>
              </li>
              <li>
                <Link href="#amazon-fba" className="text-gray-400 hover:text-indigo-400 transition-colors inline-block">
                  Amazon FBA
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400">
                  Jahan Lodge 149 Ramchandrapur<br/>
                  Sadhur Moor Ghoramara Boalia<br/>
                  Rajshahi 6100<br/>
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-indigo-400" />
                <a href="tel:+8801737336053" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  +880 1737336053
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-indigo-400" />
                <a href="mailto:ragibneyaz@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  ragibneyaz@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 text-center text-gray-500">
          <p>© {currentYear} RYENS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 