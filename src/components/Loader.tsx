import React, { useState, useEffect } from 'react';
import { Book, Lightbulb, Pen } from 'lucide-react';

const WordwiseLoader = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [Book, Lightbulb, Pen];
  const IconComponent = icons[currentIcon];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-50">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping"></div>
        <div className="relative flex items-center justify-center w-full h-full bg-indigo-100 rounded-full">
          <IconComponent className="w-16 h-16 text-indigo-600" />
        </div>
      </div>
      <h1 className="mt-8 text-4xl font-bold text-indigo-700">Wordwise</h1>
      <div className="mt-4 text-xl text-indigo-500">Unlocking English Mastery</div>
      <div className="mt-8 flex space-x-2">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <span 
            key={index} 
            className="inline-block px-2 py-1 text-indigo-600 bg-indigo-100 rounded"
            style={{ animation: `bounce 0.5s ease infinite ${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordwiseLoader;