import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const progressData = [
  { label: 'GYM', value: 80 },
  { label: 'Yoga', value: 60 },
  { label: 'NUTRITION', value: 70 },
  { label: 'RUNNING', value: 95 },
];

export default function Home() {
  const [progress, setProgress] = useState(progressData.map(item => ({ ...item, animatedValue: 0 })));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('why-choose-us');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setProgress(prevProgress =>
          prevProgress.map((item) => {
            if (item.animatedValue < item.value) {
              return { ...item, animatedValue: item.animatedValue + 1 };
            }
            return item;
          })
        );
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div>
      
    <header
    className="relative flex flex-col items-center justify-center text-center bg-cover bg-center h-screen"
    style={{ backgroundImage: 'url(/logo.png)' }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
    <div className="relative z-10 max-w-3xl px-6">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-white"
        initial={{ opacity: 0, y: 50 }}  // Starts faded out and moved down
        animate={{ opacity: 1, y: 0 }}   // Moves up and fades in
        transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
      >
        Hey! Build Your Body <br /> 
        <span className="text-purple-400">With Follow YLifeStyle.</span>
      </motion.h1>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Contact Us
          </motion.button>
        </Link>
        <Link href="/calorie-calculator">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600"
          >
            Calculate Calories
          </motion.button>
        </Link>
      </div>
    </div>
  </header>
      {/* Why Choose Us Section */}
      <div id="why-choose-us" className="text-center py-16 transition-opacity duration-1000" style={{ opacity: isVisible ? 1 : 0 }}>
      <h2 className="text-4xl font-bold transition-transform duration-1000 transform" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
        Why <span className="text-purple-500">Choose</span> Us?
      </h2>
      <p className="text-gray-600">Are You Want to <span className="font-bold">Change Your Life?</span></p>
      <div className="flex justify-center gap-8 mt-8">
        {progress.map((item, index) => (
          <div key={index} className="text-center">
            <svg className="w-24 h-24" viewBox="0 0 36 36">
              <path className="text-gray-300 stroke-current" strokeWidth="3.8" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831" fill="none" />
              <path className="text-blue-500 stroke-current transition-all duration-1000" strokeWidth="3.8" strokeDasharray={`${item.animatedValue}, 100`} d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831" fill="none" />
              <text x="18" y="20.35" className="text-lg font-bold" textAnchor="middle">{item.animatedValue}%</text>
            </svg>
            <p className="mt-2 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
      {/* Transformation Section */}
      <div className="text-center py-16 bg-gray-100">
        <h2 className="text-4xl font-bold mb-6">Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          
<Image src="/transformation1.jpg" alt="Transformation" width={300} height={200} className="rounded-lg shadow-md" />
<Image src="/transformation2.jpg" alt="Transformation" width={300} height={200} className="rounded-lg shadow-md" />
<Image src="/transformation3.jpg" alt="Transformation" width={300} height={200} className="rounded-lg shadow-md" />
<Image src="/transformation4.jpg" alt="Transformation" width={300} height={200} className="rounded-lg shadow-md" />
        </div>
      </div>
      {/* Choose the Program Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold transition-transform duration-1000 transform" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
          Choose<span className="text-purple-500"> the Program</span>
        </h2>
        <p className="text-gray-600">Are You Want to <span className="font-bold">Change Your Life?</span></p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center w-80 md:w-96">
            <h3 className="text-xl font-semibold">Monthly</h3>
            <p className="text-3xl text-blue-500">200</p>
            <p className="text-gray-500">monthly offer</p>
            <button className="mt-4 px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Subscribe Now</button>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg text-center w-80 md:w-96">
            <h3 className="text-xl font-semibold">Yearly</h3>
            <p className="text-3xl text-blue-500">500</p>
            <p className="text-gray-500">yearly offer</p>
            <button className="mt-4 px-4 py-1 text-sm text-white bg-purple-500 rounded-full shadow-md hover:bg-purple-600">Subscribe Now</button>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}