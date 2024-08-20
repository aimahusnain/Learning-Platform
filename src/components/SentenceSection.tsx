import { ChevronLeft, ChevronRight } from "lucide-react";

type SubCategory = "Negative" | "Positive" | "Yes/No Questions";

const SentenceSection: React.FC<any> = ({
  title,
  category,
  subCategory,
  sentences,
  onNext,
  onPrev,
  onSelectSubCategory,
  currentSubCategory,
  currentIndex,
  showNegativePositive,
}) => (
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-2xl">
    <h2 className="text-3xl font-bold text-center py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
    <p>{currentIndex}/{sentences.length}</p>

      {title}
    </h2>
    <div className="p-8">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-inner mb-6">
        <div
          key={`${category}-${subCategory}-${currentIndex}`}
          className="text-xl font-semibold text-center mb-4 h-24 flex items-center justify-center text-gray-800 transition-opacity duration-300 ease-in-out"
        >
          {sentences[currentIndex].charAt(0).toUpperCase() +
            sentences[currentIndex].slice(1).toLowerCase()}
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
      {showNegativePositive === true && (
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
      )}
    </div>
  </div>
);

export default SentenceSection;
