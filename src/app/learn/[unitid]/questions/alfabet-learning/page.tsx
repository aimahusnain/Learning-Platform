'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

const getRandomColor = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#82E0AA'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ABCRandomizer = () => {
  const [currentLetter, setCurrentLetter] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const getRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  const handleNextLetter = () => {
    setCurrentLetter(getRandomLetter());
    setBackgroundColor(getRandomColor());
  };

  useEffect(() => {
    handleNextLetter();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor }}>
      <div className="text-[9rem] font-bold mb-8" style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        {currentLetter}
      </div>
      <Button
        onClick={handleNextLetter}
        className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <Shuffle className="mr-2 h-5 w-5" />
        Next Letter
      </Button>
    </div>
  );
};

export default ABCRandomizer;