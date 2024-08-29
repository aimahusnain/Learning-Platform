"use client";

import SentenceSection from "@/components/SentenceSection";
import { useEffect, useState } from "react";
import { ColorScheme, colorSchemes } from "@/components/ColorScheme";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type SubCategory = "Negative" | "Positive" | "Yes/No Questions";
type Category =
  | "Adjectives"
  | "Singular Noun"
  | "Plural Noun"

const YourselvesCard = ({
  learnAbout,
  data,
  generateQuestions = false,
}: {
  learnAbout: string;
  data: any;
  generateQuestions?: boolean;
}) => {
  const router = useRouter();
  const [indexes, setIndexes] = useState<
    Record<Category, Record<SubCategory, number>>
  >({
    "Singular Noun": { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    "Plural Noun": { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
    "Adjectives": { Negative: 0, Positive: 0, "Yes/No Questions": 0 },
  });

  const [currentColorScheme, setCurrentColorScheme] =
    useState<ColorScheme>("tealIndigo");

  const generateNegativeSentence = (
    positiveSentence: string,
    category: Category
  ): string => {
    if (
      category === "Adjectives" ||
      category === "Plural Noun" ||
      category === "Singular Noun"
    ) {
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

  const generateYesNoQuestion = (
    positiveSentence: string,
    category: Category
  ): string => {
    if (
        category === "Adjectives" ||
        category === "Plural Noun" ||
        category === "Singular Noun"
    ) {
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

  const getSentences = (
    category: Category,
    subCategory: SubCategory
  ): string[] => {
    const categoryData = data[0][category];
    const positiveSentences =
      categoryData.find((item: any) => item.name === "Positive")?.sentence ||
      [];

    if (generateQuestions) {
      switch (subCategory) {
        case "Positive":
          return positiveSentences;
        case "Negative":
          return positiveSentences.map((sentence: string) =>
            generateNegativeSentence(sentence, category)
          );
        case "Yes/No Questions":
          return positiveSentences.map((sentence: string) =>
            generateYesNoQuestion(sentence, category)
          );
        default:
          return [];
      }
    } else {
      return (
        categoryData.find((item: any) => item.name === subCategory)?.sentence ||
        []
      );
    }
  };

  const [currentSubCategories, setCurrentSubCategories] = useState<
    Record<Category, SubCategory>
  >({
    "Adjectives": "Negative",
    "Plural Noun": "Negative",
    "Singular Noun": "Negative",
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

  // Write text
  const [showWritingTest, setShowWritingTest] = useState(false);
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [savedQuestions, setSavedQuestions] = useState<string[]>([]);

  useEffect(() => {
    // Load saved questions when email changes
    const loadedQuestions = localStorage.getItem(email);
    if (loadedQuestions) {
      setSavedQuestions(JSON.parse(loadedQuestions));
    } else {
      setSavedQuestions([]);
    }
  }, [email]);

  const [sentences, setSentences] = useState<
    Array<{
      sentence: string;
      positive: string;
      negative: string;
      yesNoQuestion: string;
      meaning: string;
    }>
  >([
    {
      sentence: "",
      positive: "",
      negative: "",
      yesNoQuestion: "",
      meaning: "",
    },
  ]);

  useEffect(() => {
    const savedSentences = localStorage.getItem(email);
    if (savedSentences) {
      setSentences(JSON.parse(savedSentences));
    } else {
      setSentences([
        {
          sentence: "",
          positive: "",
          negative: "",
          yesNoQuestion: "",
          meaning: "",
        },
      ]);
    }
  }, [email]);

  const handleInputChange = (index: number, field: string, value: string) => {
    const newSentences = [...sentences];
    newSentences[index] = { ...newSentences[index], [field]: value };
    setSentences(newSentences);
  };

  const addNewRow = () => {
    setSentences([
      ...sentences,
      {
        sentence: "",
        positive: "",
        negative: "",
        yesNoQuestion: "",
        meaning: "",
      },
    ]);
  };

  const saveSentences = () => {
    if (email) {
      localStorage.setItem(email, JSON.stringify(sentences));
      alert("Sentences saved successfully!");
    } else {
      alert("Please enter an email address before saving.");
    }
  };

  return (
    <>
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
            <Button
              onClick={() => setShowWritingTest(showWritingTest === true ? false : true)}
              className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 ml-4"
            >
              {showWritingTest ? "Close Writing Test" : "Take Writing Test"}
            </Button>
          </div>

          {showWritingTest === true ? (
           <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
           <input
             type="email"
             placeholder="Enter your email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
           <div className="overflow-x-auto">
             <table className="w-full border-collapse">
               <thead>
                 <tr className="bg-gray-100">
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No.</th>
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sentence</th>
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Positive</th>
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Negative</th>
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yes/No Question</th>
                   <th className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meaning</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                 {sentences.map((sentence, index) => (
                   <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                     <td className="p-3 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                     {["sentence", "positive", "negative", "yesNoQuestion", "meaning"].map((field) => (
                       <td key={field} className="p-3 whitespace-nowrap">
                         <input
                           type="text"
                           value={sentence[field as keyof typeof sentence]}
                           onChange={(e) => handleInputChange(index, field, e.target.value)}
                           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                         />
                       </td>
                     ))}
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div className="mt-6 flex justify-center space-x-4">
             <Button
               onClick={addNewRow}
               className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200"
             >
               Add New Row
             </Button>
             <Button
               onClick={saveSentences}
               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200"
             >
               Save Sentences
             </Button>
           </div>
         </div>
          ) : (
            <>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {(
                  [
                    "Singular Noun",
                    "Plural Noun",
                    "Adjectives",
                  ] as const
                ).map((category) => (
                  <SentenceSection
                    key={category}
                    title={category.charAt(0).toUpperCase() + category.slice(1)}
                    category={category}
                    subCategory={currentSubCategories[category]}
                    sentences={getSentences(
                      category,
                      currentSubCategories[category]
                    )}
                    onNext={() => nextSentence(category)}
                    onPrev={() => prevSentence(category)}
                    showNegativePositive={true} // Adjust if necessary
                    onSelectSubCategory={(subCategory: any) =>
                      handleSubCategoryChange(category, subCategory)
                    }
                    currentSubCategory={currentSubCategories[category]}
                    currentIndex={
                      indexes[category][currentSubCategories[category]]
                    }
                    colorScheme={colorSchemes[currentColorScheme]}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default YourselvesCard;
