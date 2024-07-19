// HomePage.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Book,
  Award,
  Users,
  ArrowRight,
  Globe,
  Zap,
  ChevronUp,
} from "lucide-react";
import AnimatedLogo from "@/components/AnimatedLogo";
import HomepageButtons from "@/components/HomepageButtons";
import GenderPopup from "@/components/GenderPopup";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGenderPopup, setShowGenderPopup] = useState(false);
  const [colorScheme, setColorScheme] = useState('purple');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    const timeoutId = setTimeout(() => {
      setShowGenderPopup(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setColorScheme(gender === 'female' ? 'pink' : 'purple');
    setShowGenderPopup(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  };

  return (
    <div className={`min-h-screen ${colorScheme === 'pink' ? 'bg-gradient-to-br from-pink-50 to-red-50' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      <motion.header
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Book className={`h-8 w-8 ${colorScheme === 'pink' ? 'text-pink-600' : 'text-indigo-600'} mr-2`} />
            <span className={`text-2xl font-bold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'}`}>WordWise</span>
          </motion.div>
          <div className="flex space-x-4">
            {["Features", "How It Works", "Pricing"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-gray-700 hover:${colorScheme === 'pink' ? 'text-pink-600' : 'text-indigo-600'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          className="text-center mb-16 py-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className={`text-5xl font-extrabold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'} mb-4`}
            animate={pulse}
          >
            Master English with
            <span className={`${colorScheme === 'pink' ? 'text-pink-600' : 'text-indigo-600'} w-fit`}>
              {" "}
              <AnimatedLogo />
            </span>
          </motion.h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Elevate your language skills through interactive challenges,
            real-world scenarios, and personalized learning paths.
          </p>
          <HomepageButtons />
        </motion.section>

        <motion.section
          id="features"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <h2 className={`text-3xl font-bold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'} mb-8 text-center`}>
            Why Choose WordWise?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Language Skills",
                description:
                  "Prepare for real-world communication in diverse global contexts.",
              },
              {
                icon: Zap,
                title: "Adaptive Learning",
                description:
                  "Our AI-powered system adapts to your learning style and pace.",
              },
              {
                icon: Users,
                title: "Community Challenges",
                description:
                  "Compete with friends and learn together in a supportive environment.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className={`w-12 h-12 ${colorScheme === 'pink' ? 'text-pink-600' : 'text-indigo-600'} mb-4`} />
                <h3 className={`text-xl font-semibold mb-2 ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="how-it-works"
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <h2 className={`text-3xl font-bold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'} mb-8 text-center`}>
            How WordWise Works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-lg">
            {[
              {
                title: "1. Sign Up",
                description:
                  "Create your free account and set your language goals.",
              },
              {
                title: "2. Take the Assessment",
                description:
                  "Complete our adaptive placement test to determine your current level.",
              },
              {
                title: "3. Start Learning",
                description:
                  "Dive into personalized lessons and start improving your skills.",
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="text-center md:text-left mb-4 md:mb-0"
                  variants={fadeIn}
                >
                  <h3 className={`text-2xl font-semibold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'} mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
                {index < 2 && (
                  <motion.div
                    className="hidden md:block"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className={`w-8 h-8 ${colorScheme === 'pink' ? 'text-pink-600' : 'text-indigo-600'} mx-4`} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="pricing"
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className={`text-3xl font-bold ${colorScheme === 'pink' ? 'text-pink-900' : 'text-indigo-900'} mb-8`}>
            Ready to Become a Language Master?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already on their way to English
            fluency with WordWise.
          </p>
          <motion.button
            className={`${colorScheme === 'pink' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started for Free
            <Award className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.section>
      </main>

      <footer className={`${colorScheme === 'pink' ? 'bg-pink-900' : 'bg-indigo-900'} text-white py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <Book className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">WordWise</span>
          </motion.div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(
              (item) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`hover:${colorScheme === 'pink' ? 'text-pink-300' : 'text-indigo-300'} mb-2 md:mb-0`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </footer>

      <motion.button
        className={`fixed bottom-4 right-4 ${colorScheme === 'pink' ? 'bg-pink-600' : 'bg-indigo-600'} text-white p-2 rounded-full shadow-lg`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      {showGenderPopup && <GenderPopup onSelect={handleGenderSelect} />}
    </div>
  );
};

export default HomePage;