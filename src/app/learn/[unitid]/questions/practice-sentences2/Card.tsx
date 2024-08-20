"use client";

import SentenceSection from "@/components/SentenceSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type SubCategory = "Positive";
type Category = "data set 1" | "data set 2" | "data set 3" | "data set 4" | "data set 5";

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
    "data set 1": { Positive: 0 },
    "data set 2": { Positive: 0 },
    "data set 3": { Positive: 0 },
    "data set 4": { Positive: 0 },
    "data set 5": { Positive: 0 },
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

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4">
      <div className="">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
         {learnAbout}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {(["data set 1", "data set 2", "data set 3", "data set 4", "data set 5"] as const).map((category) => (
            <SentenceSection
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              category={category}
              subCategory={currentSubCategories[category]}
              sentences={getSentences(category, currentSubCategories[category])}
              onNext={() => nextSentence(category)}
              showNegativePositive={false} // You might want to remove this prop if not needed
              onPrev={() => prevSentence(category)}
              onSelectSubCategory={(subCategory: any) =>
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
