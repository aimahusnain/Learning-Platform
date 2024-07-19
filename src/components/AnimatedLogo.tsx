import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Book } from 'lucide-react';

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const textX = useTransform(mouseX, [-100, 100], [-10, 10]);

  const containerVariants = {
    rest: { width: 'auto' },
    hover: { width: '60px', transition: { duration: 0.3 } }
  };

  const textVariants = {
    rest: { opacity: 1, x: 0 },
    hover: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  const bookVariants = {
    rest: { opacity: 0, scale: 0, rotate: -180 },
    hover: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { 
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.1
      } 
    }
  };

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    mouseX.set(x);
  };

  return (
    <motion.div
      className="relative inline-flex items-center justify-center overflow-hidden cursor-pointer"
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      variants={containerVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.span
        className="text-5xl font-extrabold whitespace-nowrap"
        variants={textVariants}
        style={{ x: textX }}
      >
        WordWise
      </motion.span>
      <motion.div
        className="absolute"
        variants={bookVariants}
      >
        <Book className="w-12 h-12" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;