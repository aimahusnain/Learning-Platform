"use client";

import SentenceSection from "@/components/SentenceSection";
import { useState } from "react";
import { ColorScheme, colorSchemes } from "@/components/ColorScheme";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type SubCategory = "Negative" | "Positive" | "Yes/No Questions";
type Category = "noun" | "adjective" | "preposition" | "objective" | "possesive";


const Card = ({ learnAbout, data }: { learnAbout: string; data: any }) => {
  const router = useRouter()
  const [indexes, setIndexes] = useState<Record<Category, Record<SubCategory, number>>>({
    noun: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    adjective: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    preposition: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    objective: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    possesive: { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
  });

  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>("tealIndigo");

  const generateNegativeSentence = (positiveSentence: string, category: Category): string => {
    if (category === "noun" || category === "adjective" || category === "preposition") {
      if (positiveSentence.startsWith("I'm")) {
        return positiveSentence.replace("I'm", "I'm not");
      }
      return `I'm not ${positiveSentence.replace("I'm", "").trim()}`;
    } else if (category === "objective" || category === "possesive") {
      const singularMatch = positiveSentence.match(/^(.*) is (.*)$/);
      const pluralMatch = positiveSentence.match(/^(.*) are (.*)$/);
      if (singularMatch) {
        return `${singularMatch[1]} isn't ${singularMatch[2]}`;
      } else if (pluralMatch) {
        return `${pluralMatch[1]} aren't ${pluralMatch[2]}`;
      }
    }
    return positiveSentence; // Default case
  };
  
  const generateYesNoQuestion = (positiveSentence: string, category: Category): string => {
    if (category === "noun" || category === "adjective" || category === "preposition") {
      if (positiveSentence.startsWith("I'm")) {
        return `Am I ${positiveSentence.replace("I'm", "").trim()}?`;
      }
      return `Am I ${positiveSentence}?`;
    } else if (category === "objective" || category === "possesive") {
      const singularMatch = positiveSentence.match(/^(.*) is (.*)$/);
      const pluralMatch = positiveSentence.match(/^(.*) are (.*)$/);
      if (singularMatch) {
        return `Is ${singularMatch[1]} ${singularMatch[2]}?`;
      } else if (pluralMatch) {
        return `Are ${pluralMatch[1]} ${pluralMatch[2]}?`;
      }
    }
    return positiveSentence; // Default case
  };

  const getSentences = (category: Category, subCategory: SubCategory): string[] => {
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

 
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4">
      <div className="">
     <div className="flex flex-col text-center justify-center items-center mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {(["noun", "adjective", "preposition", "possesive", "objective"] as const).map((category) => (
            <SentenceSection
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              category={category}
              subCategory={currentSubCategories[category]}
              sentences={getSentences(category, currentSubCategories[category])}
              onNext={() => nextSentence(category)}
              onPrev={() => prevSentence(category)}
              showNegativePositive={true} // Adjust if necessary
              onSelectSubCategory={(subCategory: any) =>
                handleSubCategoryChange(category, subCategory)
              }
              currentSubCategory={currentSubCategories[category]}
              currentIndex={indexes[category][currentSubCategories[category]]}
              colorScheme={colorSchemes[currentColorScheme]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;