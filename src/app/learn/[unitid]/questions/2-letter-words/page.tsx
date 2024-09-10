'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words2Letter = ['at', 'be', 'do', 'go', 'hi', 'in', 'is', 'it', 'no', 'on', 'to', 'up', 'we', 'my', 'me', 'he', 'she', 'of', 'or', 'by'];

const LetterWordsPage: React.FC = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [remainingWords, setRemainingWords] = useState<string[]>([]);

  useEffect(() => {
    resetWords();
  }, []);

  const resetWords = () => {
    const shuffledWords = [...words2Letter].sort(() => Math.random() - 0.5);
    setRemainingWords(shuffledWords);
  };

  const showNextWord = () => {
    if (remainingWords.length > 0) {
      const newRemainingWords = [...remainingWords];
      const nextWord = newRemainingWords.pop() as string;
      setCurrentWord(nextWord);
      setRemainingWords(newRemainingWords);
      speakWord(nextWord);
    } else {
      resetWords();
    }
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    }
  };

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FED766', '#2AB7CA', '#F0B67F', '#FE4A49', '#A1C3D1'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Fun 2-Letter Words!
      </motion.h1>

      <motion.div 
        className="mb-12 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-9xl md:text-[12rem] font-extrabold mb-8 p-8 rounded-2xl shadow-2xl flex items-center justify-center"
          style={{ 
            backgroundColor: getRandomColor(), 
            color: '#FFFFFF',
            width: '280px',
            height: '280px'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {currentWord}
        </motion.div>
        <motion.button
          onClick={() => speakWord(currentWord)}
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-6 rounded-full shadow-lg text-2xl mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔊 Hear It!
        </motion.button>
      </motion.div>

      <motion.button
        onClick={showNextWord}
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg text-3xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next Word ➡️
      </motion.button>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-2xl font-semibold text-white">
          Words Left: {remainingWords.length}
        </p>
      </motion.div>

      <motion.footer 
        className="text-center py-4 text-white absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-xl">Made with ❤️ for little learners!</p>
      </motion.footer>
    </div>
  );
};

export default LetterWordsPage;