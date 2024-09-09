'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, Volume2 } from 'lucide-react';

const getRandomColor = (): string => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#82E0AA',
    '#FF9FF3', '#54A0FF', '#5CD859', '#FF6B6B', '#FEA47F', '#25CCF7', '#EAB543', '#55E6C1',
    '#CAD3C8', '#F97F51', '#1B9CFC', '#F8EFBA', '#58B19F', '#2C3A47', '#B33771', '#3B3B98'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ABCRandomizer: React.FC = () => {
  const [currentLetter, setCurrentLetter] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [femaleVoice, setFemaleVoice] = useState<SpeechSynthesisVoice | null>(null);

  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  useEffect(() => {
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoices = voices.filter(voice => voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman'));
      setFemaleVoice(femaleVoices.length > 0 ? femaleVoices[0] : voices[0]);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = setVoice;
    }

    setVoice(); // Initial call in case voices are already loaded
    handleNextLetter(); // Initialize with a random letter
  }, []);

  const getRandomLetter = (): string => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  const speakLetter = (letter: string) => {
    if (femaleVoice) {
      const utterance = new SpeechSynthesisUtterance(letter);
      utterance.voice = femaleVoice;
      utterance.rate = 0.8; // Slow down the speech rate a bit
      utterance.pitch = 1.2; // Slightly higher pitch for clarity
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextLetter = () => {
    const newLetter = getRandomLetter();
    setCurrentLetter(newLetter);
    setBackgroundColor(getRandomColor());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor }}>
      <div className="text-9xl font-bold mb-8 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        {currentLetter}
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={handleNextLetter}
          className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Shuffle className="mr-2 h-5 w-5" />
          Next Letter
        </Button>
        <Button
          onClick={() => speakLetter(currentLetter)}
          className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Volume2 className="mr-2 h-5 w-5" />
          Speak Letter
        </Button>
      </div>
    </div>
  );
};

export default ABCRandomizer;