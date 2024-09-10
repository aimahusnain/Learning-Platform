'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const words2Letter = [
  { word: 'at', romanUrdu: 'pe', urdu: 'پے' },
  { word: 'be', romanUrdu: 'hona', urdu: 'ہونا' },
  { word: 'do', romanUrdu: 'karo', urdu: 'کرو' },
  { word: 'go', romanUrdu: 'jao', urdu: 'جاؤ' },
  { word: 'hi', romanUrdu: 'salam', urdu: 'سلام' },
  { word: 'in', romanUrdu: 'andar', urdu: 'اندر' },
  { word: 'is', romanUrdu: 'hai', urdu: 'ہے' },
  { word: 'it', romanUrdu: 'yeh', urdu: 'یہ' },
  { word: 'no', romanUrdu: 'nahi', urdu: 'نہیں' },
  { word: 'on', romanUrdu: 'par', urdu: 'پر' },
  { word: 'to', romanUrdu: 'ko', urdu: 'کو' },
  { word: 'up', romanUrdu: 'upar', urdu: 'اوپر' },
  { word: 'we', romanUrdu: 'hum', urdu: 'ہم' },
  { word: 'my', romanUrdu: 'mera', urdu: 'میرا' },
  { word: 'me', romanUrdu: 'mujhe', urdu: 'مجھے' },
  { word: 'he', romanUrdu: 'woh', urdu: 'وہ' },
  { word: 'of', romanUrdu: 'ka', urdu: 'کا' },
  { word: 'or', romanUrdu: 'ya', urdu: 'یا' },
  { word: 'by', romanUrdu: 'se', urdu: 'سے' },
  { word: 'she', romanUrdu: 'woh', urdu: 'وہ' },
];

const LetterWordsPage: React.FC = () => {
    const [currentWord, setCurrentWord] = useState({ word: '', romanUrdu: '', urdu: '' });
    const [remainingWords, setRemainingWords] = useState<typeof words2Letter>([]);
    const [bgColor, setBgColor] = useState('');
  
    useEffect(() => {
      resetWords();
    }, []);
  
    const resetWords = () => {
      const shuffledWords = [...words2Letter].sort(() => Math.random() - 0.5);
      setRemainingWords(shuffledWords);
      showNextWord(shuffledWords);
    };
  
    const showNextWord = (words = remainingWords) => {
      if (words.length > 0) {
        const newRemainingWords = [...words];
        const nextWord = newRemainingWords.pop() as typeof words2Letter[0];
        setCurrentWord(nextWord);
        setRemainingWords(newRemainingWords);
        setBgColor(getRandomColor());
      } else {
        resetWords();
      }
    };

  const speakWord = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      
      // Find the appropriate voice
      const voices = window.speechSynthesis.getVoices();
      if (lang === 'en-US') {
        const englishVoice = voices.find(voice => voice.lang === 'en-US');
        if (englishVoice) utterance.voice = englishVoice;
      } else if (lang === 'ur-PK') {
        const urduVoice = voices.find(voice => voice.lang === 'ur-PK');
        if (urduVoice) utterance.voice = urduVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  const getRandomColor = () => {
    const colors = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-blue-500',
      'from-yellow-400 to-orange-500',
      'from-pink-400 to-red-500',
      'from-indigo-400 to-blue-500',
      'from-purple-400 to-pink-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} flex flex-col items-center justify-center p-4 transition-colors duration-500`}>
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-center mb-8 text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Fun 2-Letter Words!
      </motion.h1>
      <motion.div 
        className="w-full max-w-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        <Card className="p-6 shadow-2xl bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl border border-white border-opacity-20">
       
          <motion.div 
            className="text-8xl md:text-9xl font-extrabold mb-6 p-6 rounded-2xl shadow-inner flex items-center justify-center bg-white bg-opacity-20"
            style={{ 
              color: '#FFFFFF',
              aspectRatio: '1 / 1',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentWord.word}
          </motion.div>
          <Button
        onClick={() => showNextWord()}
        className="my-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold text-xl px-8 py-4 w-full"
      >
        Next Word
      </Button>
          <div className="space-y-3 mb-6">
            <p className="text-2xl md:text-3xl font-bold text-white">{currentWord.romanUrdu}</p>
            <p className="text-2xl md:text-3xl font-bold text-white">{currentWord.urdu}</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Button
              onClick={() => speakWord(currentWord.word, 'en-US')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
            >
              🔊 English
            </Button>
            <Button
              onClick={() => speakWord(currentWord.romanUrdu, 'ur-PK')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
            >
              🗣️ Roman Urdu
            </Button>
            <Button
              onClick={() => speakWord(currentWord.urdu, 'ur-PK')}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
            >
              🗣️ Urdu
            </Button>
          </div>
        </Card>
      </motion.div>
   
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl font-semibold text-white">
          Words Left: {remainingWords.length}
        </p>
      </motion.div>
    </div>
  );
};

export default LetterWordsPage;