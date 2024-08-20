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
}) => {
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
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

  return (
    <div
      className={`bg-gradient-to-br from-teal-400 to-indigo-600 p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl mx-auto transition-all duration-300 ease-in-out ${
        isFullscreen
          ? "fixed inset-0 z-50 m-0 rounded-none"
          : "max-w-md sm:max-w-lg md:max-w-xl lg:max-w-4xl"
      }`}
    >
      <div
        className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
          isFullscreen ? "h-full flex flex-col" : ""
        }`}
      >
        <div className="bg-gradient-to-r from-teal-500 to-indigo-500 p-4 sm:p-6 text-white flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">
            {title}
          </h2>
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
              {sentences[currentIndex].charAt(0).toUpperCase() +
                sentences[currentIndex].slice(1).toLowerCase()}
            </p>
          </div>

          <div className="flex flex-row justify-between items-center mb-6 sm:mb-8">
            <button
              onClick={onPrev}
              className="p-2 sm:p-3 lg:p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-transform transform hover:scale-110"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={speakSentence}
                className="p-2 sm:p-3 lg:p-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-transform transform hover:scale-110"
              >
                <Volume2 size={18} />
              </button>
            </div>
            <button
              onClick={onNext}
              className="p-2 sm:p-3 lg:p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-transform transform hover:scale-110"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <select
            value={selectedVoice?.name || ""}
            onChange={(e) =>
              setSelectedVoice(
                voices.find((voice) => voice.name === e.target.value) || null
              )
            }
            className="px-2 sm:px-4 w-full py-1 sm:py-2 bg-gray-100 rounded-full text-gray-800 text-xs sm:text-sm md:text-base w-22 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Voice</option>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
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
