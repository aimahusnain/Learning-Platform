"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type SubCategory = "Negative" | "Positive" | "Yes/No Questions";
type Category = "noun" | "adjective" | "preposition" | "objective" | "possesive";

interface SentenceSectionProps {
  title: string;
  category: Category;
  subCategory: SubCategory;
  sentences: string[];
  onNext: () => void;
  onPrev: () => void;
  onSelectSubCategory: (subCategory: SubCategory) => void;
  currentSubCategory: SubCategory;
  currentIndex: number;
}

const Card = ({ learnAbout, data }: { learnAbout: string; data: any }) => {
  const [indexes, setIndexes] = useState<Record<Category, Record<SubCategory, number>>>({
    noun: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    adjective: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    preposition: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    objective: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    possesive: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
  });

  const generateNegativeSentence = (positiveSentence: string, category: Category): string => {
    if (category === "noun") {
      if (positiveSentence.startsWith("I'm")) {
        return positiveSentence.replace("I'm", "I'm not");
      }
      return `I'm not ${positiveSentence.replace("I'm", "").trim()}`;
    } else if (category === "adjective") {
      return positiveSentence.replace("I'm", "I'm not");
    } else if (category === "objective") {
      return positiveSentence.replace("is", "isn't");
    }
    return positiveSentence;
  };
  
  const generateYesNoQuestion = (positiveSentence: string, category: Category): string => {
    if (category === "noun" || category === "adjective") {
      if (positiveSentence.startsWith("I'm")) {
        return `Are you ${positiveSentence.replace("I'm", "").trim()}?`;
      }
      return `Are you ${positiveSentence}?`;
    } else if (category === "objective") {
      const parts = positiveSentence.split(" is ");
      if (parts.length === 2) {
        return `Is ${parts[0]} ${parts[1]}?`;
      }
    }
    return positiveSentence; // Default case
  };

  const getSentences = (category: Category, subCategory: SubCategory): string[] => {
    if (category === "noun" || category === "adjective" || category === "objective") {
      const positiveSentences = data[0][category].find((item: any) => item.name === "Positive")?.sentence || [];
      
      switch (subCategory) {
        case "Positive":
          return positiveSentences;
        case "Negative":
          return positiveSentences.map((sentence: string) => generateNegativeSentence(sentence, category));
        case "Yes/No Questions":
          return positiveSentences.map((sentence: string) => generateYesNoQuestion(sentence, category));
        default:
          return [];
      }
    }
    
    // For other categories, return the original sentences
    return data[0][category].find((item: any) => item.name === subCategory)?.sentence || [];
  };

  const [currentSubCategories, setCurrentSubCategories] = useState<Record<Category, SubCategory>>({
    noun: "Negative",
    adjective: "Negative",
    preposition: "Negative",
    objective: "Negative",
    possesive: "Negative",
  });


  const nextSentence = (category: Category) => {
    const subCategory = currentSubCategories[category];
    const sentences = getSentences(category, subCategory);
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: (prevIndexes[category][subCategory] + 1) % sentences.length,
      },
    }));
  };

  const prevSentence = (category: Category) => {
    const subCategory = currentSubCategories[category];
    const sentences = getSentences(category, subCategory);
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: (prevIndexes[category][subCategory] - 1 + sentences.length) % sentences.length,
      },
    }));
  };

  const handleSubCategoryChange = (category: Category, subCategory: SubCategory) => {
    setCurrentSubCategories((prev) => ({
      ...prev,
      [category]: subCategory,
    }));
    // Keep the current index when switching subcategories
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: prevIndexes[category][currentSubCategories[category]],
      },
    }));
  };

  const SentenceSection: React.FC<SentenceSectionProps> = ({
    title,
    category,
    subCategory,
    sentences,
    onNext,
    onPrev,
    onSelectSubCategory,
    currentSubCategory,
    currentIndex,
  }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-2xl">
     
      <h2 className="text-3xl font-bold text-center py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        {title}
      </h2>
      <div className="p-8">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-inner mb-6">
          <div key={`${category}-${subCategory}-${currentIndex}`} className="text-xl font-semibold text-center mb-4 h-24 flex items-center justify-center text-gray-800 transition-opacity duration-300 ease-in-out first-letter:uppercase lowercase">
            {sentences[currentIndex]}
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <button
            onClick={onPrev}
            className="px-3 py-3 font-bold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={onNext}
            className="px-3 py-3 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Negative", "Positive", "Yes/No Questions"].map((type) => (
            <button
              key={type}
              onClick={() => onSelectSubCategory(type as SubCategory)}
              className={`px-4 py-2 font-bold rounded-full transition-all duration-300 ease-in-out ${
                currentSubCategory === type
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4">
      <div className="">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Learn About {learnAbout}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {(["noun", "adjective", "preposition", "possesive", "objective"] as const).map((category) => (
            <SentenceSection
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              category={category}
              subCategory={currentSubCategories[category]}
              sentences={getSentences(category, currentSubCategories[category])}
              onNext={() => nextSentence(category)}
              onPrev={() => prevSentence(category)}
              onSelectSubCategory={(subCategory) =>
                handleSubCategoryChange(category, subCategory)
              }
              currentSubCategory={currentSubCategories[category]}
              currentIndex={indexes[category][currentSubCategories[category]]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;