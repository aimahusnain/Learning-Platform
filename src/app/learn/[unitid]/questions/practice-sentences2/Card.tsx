"use client";

import SentenceSection from "@/components/SentenceSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type SubCategory = "Positive";
type Category = "data set 1" | "data set 2" | "data set 3" | "data set 4" | "data set 5" | "data set 6";

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
  showNegativePositive?: boolean;
}

const Card: React.FC<{ learnAbout: string; data: any }> = ({ learnAbout, data }) => {
  const [indexes, setIndexes] = useState<Record<Category, Record<SubCategory, number>>>({
    "data set 1": { Positive: 0 },
    "data set 2": { Positive: 0 },
    "data set 3": { Positive: 0 },
    "data set 4": { Positive: 0 },
    "data set 5": { Positive: 0 },
    "data set 6": { Positive: 0 },
  });

  const getSentences = (category: Category, subCategory: SubCategory): string[] => {
    if (subCategory === "Positive") {
      return data[0][category].find((item: any) => item.name === "Positive")?.sentence || [];
    }
    return [];
  };

  const [currentSubCategories, setCurrentSubCategories] = useState<Record<Category, SubCategory>>({
    "data set 1": "Positive",
    "data set 2": "Positive",
    "data set 3": "Positive",
    "data set 4": "Positive",
    "data set 5": "Positive",
    "data set 6": "Positive",
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
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: prevIndexes[category][currentSubCategories[category]],
      },
    }));
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          {learnAbout}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(["data set 1", "data set 2", "data set 3", "data set 4", "data set 5", "data set 6"] as const).map((category) => (
            <div key={category} className="min-w-0">
              <SentenceSection
                title={category.charAt(0).toUpperCase() + category.slice(1)}
                category={category}
                subCategory={currentSubCategories[category]}
                sentences={getSentences(category, currentSubCategories[category])}
                onNext={() => nextSentence(category)}
                onPrev={() => prevSentence(category)}
                onSelectSubCategory={(subCategory: any) =>
                  handleSubCategoryChange(category, subCategory)
                }
                currentSubCategory={currentSubCategories[category]}
                currentIndex={indexes[category][currentSubCategories[category]]}
                showNegativePositive={false} // Adjust if necessary
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
