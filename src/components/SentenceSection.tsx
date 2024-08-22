"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Mic,
  PlusCircle,
  Volume2,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import leven from 'leven';

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
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [wordDefinition, setWordDefinition] = useState<string | null>(null);

  // Difficulty levels
  const [easyLevel, setEasyLevel] = useState<string[]>([]);
  const [intermediateLevel, setIntermediateLevel] = useState<string[]>([]);
  const [hardLevel, setHardLevel] = useState<string[]>([]);

 const handleDifficultyLevel = (sentence: string, level: any) => {
    switch (level) {
      case "Easy":
        setEasyLevel([...easyLevel, sentence]);
        break;
      case "Intermediate":
        setIntermediateLevel([...intermediateLevel, sentence]);
        break;
      case "Hard":
        setHardLevel([...hardLevel, sentence]);
        break;
    }
  }

  // Don't Know
  const [dontKnowSentences, setDontKnowSentences] = useState<string[]>([]);
  const [showDontKnowSection, setShowDontKnowSection] = useState(false);

  const addSentenceToDontKnow = () => {
    toast("Sentence added successfully in don't know list", {
      action: {
        label: "close",
        onClick: () => console.log("close"),
      },
    });
    setDontKnowSentences([...dontKnowSentences, sentences[currentIndex]]);
  };

  const toggleDontKnowSection = () => {
    setShowDontKnowSection(!showDontKnowSection);
  };

  const DontKnowSection: React.FC<{ sentences: string[] }> = ({
    sentences,
  }) => {
    return (
      <div className="overflow-y-scroll">
        {sentences.map((sentence, index) => (
          <p key={index} className="text-black font-bold text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-2xl">
            {sentence}
          </p>
        ))}
      </div>
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const [isMicActive, setIsMicActive] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [transcript, setTranscript] = useState("");

  const startSpeechRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const newRecognition = new (window as any).webkitSpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.interimResults = true;
      newRecognition.lang = "en-US";

      newRecognition.onresult = (event: any) => {
        const speechResult =
          event.results[event.results.length - 1][0].transcript;
        setTranscript(speechResult);
      };

      newRecognition.start();
      setRecognition(newRecognition);
      setIsMicActive(true);
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  const stopSpeechRecognition = () => {
    if (recognition) {
      recognition.stop();
      setIsMicActive(false);
      compareTranscriptWithSentence(transcript);
    }
  };

  const compareTranscriptWithSentence = (spokenText: string) => {
    const currentSentence = sentences[currentIndex].toLowerCase();
    const spokenTextLower = spokenText.toLowerCase();
  
    // Calculate the Levenshtein distance between the two strings
    const distance = leven(currentSentence, spokenTextLower);
    const maxLength = Math.max(currentSentence.length, spokenTextLower.length);
    const similarityScore = 1 - distance / maxLength; // Similarity score between 0 and 1
  
    if (similarityScore > 0.9) {
      speakFeedback("Correct! You got it!");
    } else if (similarityScore > 0.7) {
      speakFeedback("You're getting the point! Try again.");
    } else if (similarityScore > 0.5) {
      speakFeedback("Almost there! Keep practicing.");
    } else if (similarityScore > 0.2) {
      speakFeedback("Sorry, please try again.");
    }
  
    setTranscript("");
  };

  const speakFeedback = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      speechSynthesis.speak(utterance);
    }
  };
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        const englishVoices = availableVoices.filter((voice) =>
          voice.lang.startsWith("en")
        );
        setVoices(englishVoices);
      } else {
        setTimeout(loadVoices, 100); // Retry after a short delay
      }
    };

    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();

    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
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
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    if (
      data &&
      data[0] &&
      data[0].meanings &&
      data[0].meanings[0] &&
      data[0].meanings[0].definitions
    ) {
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
    const words = sentence.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        onClick={() => handleWordClick(word.replace(/[^a-zA-Z]/g, ""))}
        className="cursor-pointer hover:underline"
      >
        {word}{" "}
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
          {transcript && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm font-semibold">Your speech:</p>
              <p>{transcript}</p>
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
              <button
                onMouseDown={startSpeechRecognition}
                onMouseUp={stopSpeechRecognition}
                onMouseLeave={stopSpeechRecognition}
                onTouchStart={startSpeechRecognition}
                onTouchEnd={stopSpeechRecognition}
                className={`p-2 sm:p-3 lg:p-4 bg-gradient-to-t ${
                  isMicActive
                    ? "from-green-500 to-green-600"
                    : colorScheme.gradient
                } text-white rounded-full hover:opacity-80 transition-transform transform hover:scale-110 relative`}
              >
                <Mic size={18} />
                {isMicActive && (
                  <span className="absolute top-0 right-0 h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
                )}
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
              const voice = voices.find((v) => v.name === e.target.value);
              setSelectedVoice(voice || null);
            }}
            className="px-2 sm:px-4 w-full py-1 sm:py-2 bg-gray-100 rounded-full text-gray-800 text-xs sm:text-sm md:text-base w-22 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Voice</option>
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
          <div className="my-4 gap-4 flex items-center justify-center">
            <button
              onClick={addSentenceToDontKnow}
              className="p-2 sm:p-3 lg:p-4 bg-gradient-to-t text-white rounded-full hover:opacity-80 transition-transform transform hover:scale-110"
            >
              <PlusCircle size={18} />
            </button>
            <Button onClick={toggleDontKnowSection}>
              {showDontKnowSection ? "Hide" : "Show"} Don&apos;t Know Sentences
            </Button>
          </div>
          {showDontKnowSection && (
            <DontKnowSection sentences={dontKnowSentences} />
          )}

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
