"use client";

import SentenceSection from "@/components/SentenceSection";
import React, { useState } from "react";

type SubCategory = "Positive";
type Category = "data set 1" | "data set 2" | "data set 3" | "data set 4" | "data set 5";

const colorSchemes = {
  tealIndigo: {
    name: "Teal & Indigo",
    from: "from-teal-400",
    to: "to-indigo-600",
    gradientFrom: "from-teal-500",
    gradientTo: "to-indigo-500",
    bgFrom: "from-teal-100",
    bgTo: "to-indigo-100",
  },
  pinkYellow: {
    name: "Pink & Yellow",
    from: "from-pink-400",
    to: "to-yellow-400",
    gradientFrom: "from-pink-500",
    gradientTo: "to-yellow-500",
    bgFrom: "from-pink-100",
    bgTo: "to-yellow-100",
  },
  yellowOrange: {
    name: "Yellow & Orange",
    from: "from-yellow-400",
    to: "to-orange-500",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-600",
    bgFrom: "from-yellow-100",
    bgTo: "to-orange-100",
  },
  blueSkyBlue: {
    name: "Blue & Sky Blue",
    from: "from-blue-400",
    to: "to-sky-400",
    gradientFrom: "from-blue-500",
    gradientTo: "to-sky-500",
    bgFrom: "from-blue-100",
    bgTo: "to-sky-100",
  },
  indigoPurple: {
    name: "Indigo & Purple",
    from: "from-indigo-400",
    to: "to-purple-500",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-600",
    bgFrom: "from-indigo-100",
    bgTo: "to-purple-100",
  },
  redPink: {
    name: "Red & Pink",
    from: "from-red-400",
    to: "to-pink-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-600",
    bgFrom: "from-red-100",
    bgTo: "to-pink-100",
  },
};

type ColorScheme = keyof typeof colorSchemes;

const Card: React.FC<{ learnAbout: string; data: any }> = ({ learnAbout, data }) => {
  const [indexes, setIndexes] = useState<Record<Category, Record<SubCategory, number>>>({
    "data set 1": { Positive: 0 },
    "data set 2": { Positive: 0 },
    "data set 3": { Positive: 0 },
    "data set 4": { Positive: 0 },
    "data set 5": { Positive: 0 },
  });

  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>("tealIndigo");

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
    setIndexes((prevIndexes) => ({
      ...prevIndexes,
      [category]: {
        ...prevIndexes[category],
        [subCategory]: prevIndexes[category][currentSubCategories[category]],
      },
    }));
  };

  return (
    <div className={`bg-gradient-to-br ${colorSchemes[currentColorScheme].bgFrom} ${colorSchemes[currentColorScheme].bgTo} py-16 px-4`}>
    <div className="container mx-auto">
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r ${colorSchemes[currentColorScheme].gradientFrom} ${colorSchemes[currentColorScheme].gradientTo}`}>
        {learnAbout}
      </h1>
      
      <div className="mb-8 flex justify-center">
        <select
          value={currentColorScheme}
          onChange={(e) => setCurrentColorScheme(e.target.value as ColorScheme)}
          className="px-4 py-2 rounded-full text-gray-800 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
        >
          {Object.entries(colorSchemes).map(([key, scheme]) => (
            <option key={key} value={key}>
              {scheme.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(["data set 1", "data set 2", "data set 3", "data set 4", "data set 5"] as const).map((category) => (
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
              showNegativePositive={false}
              colorScheme={colorSchemes[currentColorScheme]}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Card;
