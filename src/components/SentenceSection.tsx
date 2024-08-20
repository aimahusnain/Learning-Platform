"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Volume2, X } from "lucide-react";

type SubCategory = "Negative" | "Positive" | "Yes/No Questions";

const SentenceSection: React.FC<any> = ({
  title,
  sentences,
  onNext,
  onPrev,
  onSelectSubCategory,
  currentSubCategory,
  currentIndex,
  showNegativePositive,
  colorScheme,
}) => {
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wordDefinition, setWordDefinition] = useState<string | null>(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const speakSentence = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(sentences[currentIndex]);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      speechSynthesis.speak(utterance);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  const fetchDefinition = async (word: string) => {
    // Note: In a real application, you would need to use a proper API key and endpoint
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    if (data && data[0] && data[0].meanings && data[0].meanings[0] && data[0].meanings[0].definitions) {
      setWordDefinition(data[0].meanings[0].definitions[0].definition);
    } else {
      setWordDefinition("Definition not found");
    }
  };

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
    fetchDefinition(word);
  };

  const renderSentenceWithClickableWords = (sentence: string) => {
    const words = sentence.split(' ');
    return words.map((word, index) => (
      <span
        key={index}
        onClick={() => handleWordClick(word.replace(/[^a-zA-Z]/g, ''))}
        className="cursor-pointer hover:underline"
      >
        {word}{' '}
      </span>
    ));
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorScheme.from} ${
        colorScheme.to
      } p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl max-w-md sm:max-w-lg md:max-w-xl ${
        isFullscreen ? "!max-w-full fixed inset-0 z-50 m-0 rounded-none" : ""
      }`}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
          isFullscreen ? "h-full flex flex-col" : ""
        }`}
      >
        <div
          className={`bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} p-4 sm:p-6 text-white`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-md md:text-lg font-semibold text-center">
            {currentIndex + 1} / {sentences.length}
          </p>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white/20 rounded-full"
          >
            {isFullscreen ? <X size={24} /> : <Maximize2 size={24} />}
          </button>
        </div>

        <div
          className={`p-4 sm:p-6 lg:p-8 ${
            isFullscreen ? "flex-grow flex flex-col justify-center" : ""
          }`}
        >
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 shadow-inner">
            <p
              className={`text-black font-bold text-center leading-relaxed ${
                isFullscreen
                  ? "text-3xl sm:text-4xl"
                  : "text-sm sm:text-base md:text-lg lg:text-2xl"
              }`}
            >
              {renderSentenceWithClickableWords(sentences[currentIndex])}
            </p>
          </div>

          {selectedWord && wordDefinition && (
            <div className="bg-blue-100 p-4 rounded-lg mb-4">
              <p className="font-bold">{selectedWord}:</p>
              <p>{wordDefinition}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <button
              onClick={onPrev}
              className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-r ${colorScheme.gradient} text-white rounded-full hover:opacity-80 transition-transform transform hover:scale-110`}
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={speakSentence}
                className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-t ${colorScheme.gradient} text-white rounded-full hover:opacity-80 transition-transform transform hover:scale-110`}
              >
                <Volume2 size={18} />
              </button>
            </div>
            <button
              onClick={onNext}
              className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-l ${colorScheme.gradient} text-white rounded-full hover:opacity-80 transition-transform transform hover:scale-110`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <select
            value={selectedVoice?.name || ""}
            onChange={(e) => {
              const voice = voices.find(v => v.name === e.target.value);
              setSelectedVoice(voice || null);
            }}
            className="px-2 sm:px-4 w-full py-1 sm:py-2 bg-gray-100 rounded-full text-gray-800 text-xs sm:text-sm md:text-base w-22 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Voice</option>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>{voice.name}</option>
            ))}
          </select>

          {showNegativePositive && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-5">
              {["Negative", "Positive", "Yes/No Questions"].map((type) => (
                <button
                  key={type}
                  onClick={() => onSelectSubCategory(type as SubCategory)}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-transform duration-300 ${
                    currentSubCategory === type
                      ? "bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg transform scale-105"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentenceSection;