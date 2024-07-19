// components/GenderPopup.tsx
import { motion } from "framer-motion";
import { PersonStanding } from "lucide-react";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";

interface GenderPopupProps {
  onSelect: (gender: "male" | "female") => void;
}

const GenderPopup: React.FC<GenderPopupProps> = ({ onSelect }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to WordWise!
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          To personalize your experience, please select your gender:
        </p>
        <div className="flex justify-center space-x-6">
          <motion.button
            onClick={() => onSelect("male")}
            className="flex flex-col items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMale className="w-16 h-16 text-blue-600 mb-2" />
            <span className="text-lg font-semibold text-blue-800">Male</span>
          </motion.button>
          <motion.button
            onClick={() => onSelect("female")}
            className="flex flex-col items-center p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFemale className="w-16 h-16 text-pink-600 mb-2" />
            <span className="text-lg font-semibold text-pink-800">Female</span>
          </motion.button>
        </div>
        <p className="mt-6 text-sm text-gray-500 text-center">
          This helps us tailor our content to you. You cannot change this later
          in your settings.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default GenderPopup;
