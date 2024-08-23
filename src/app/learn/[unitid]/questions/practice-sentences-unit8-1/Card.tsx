"use client";

import { ColorScheme, colorSchemes } from "@/components/ColorScheme";
import SentenceSection from "@/components/SentenceSection";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type SubCategory = "Positive";
type Category =
  | "data set 1"
  | "data set 2"
  | "data set 3"
  | "data set 4"
  | "data set 5"

const Card: React.FC<{ learnAbout: string; data: any }> = ({
  learnAbout,
  data,
}) => {
  const router = useRouter();
  const [indexes, setIndexes] = useState<
    Record<Category, Record<SubCategory, number>>
  >({
    "data set 1": { Positive: 0 },
    "data set 2": { Positive: 0 },
    "data set 3": { Positive: 0 },
    "data set 4": { Positive: 0 },
    "data set 5": { Positive: 0 },
  });

  const [currentColorScheme, setCurrentColorScheme] =
    useState<ColorScheme>("blueSkyBlue");

  const getSentences = (
    category: Category,
    subCategory: SubCategory
  ): string[] => {
    if (subCategory === "Positive") {
      return (
        data[0][category].find((item: any) => item.name === "Positive")
          ?.sentence || []
      );
    }
    return [];
  };

  const [currentSubCategories, setCurrentSubCategories] = useState<
    Record<Category, SubCategory>
  >({
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
        [subCategory]:
          (prevIndexes[category][subCategory] + 1) % sentences.length,
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
        [subCategory]:
          (prevIndexes[category][subCategory] - 1 + sentences.length) %
          sentences.length,
      },
    }));
  };

  const handleSubCategoryChange = (
    category: Category,
    subCategory: SubCategory
  ) => {
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
    <div
      className={`bg-gradient-to-br ${colorSchemes[currentColorScheme].bgFrom} ${colorSchemes[currentColorScheme].bgTo} py-16 px-4`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button
            onClick={() => router.back()}
            className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
          >
            Go Back
          </Button>
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${colorSchemes[currentColorScheme].gradientFrom} ${colorSchemes[currentColorScheme].gradientTo}`}
          >
            {learnAbout}
          </h1>
        </div>

        <div className="mb-8 flex justify-center">
          <select
            value={currentColorScheme}
            onChange={(e) =>
              setCurrentColorScheme(e.target.value as ColorScheme)
            }
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
          {(
            [
              "data set 1",
              "data set 2",
              "data set 3",
              "data set 4",
              "data set 5",
            ] as const
          ).map((category) => (
            <div key={category} className="min-w-0">
              <SentenceSection
                title={category.charAt(0).toUpperCase() + category.slice(1)}
                category={category}
                subCategory={currentSubCategories[category]}
                sentences={getSentences(
                  category,
                  currentSubCategories[category]
                )}
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
