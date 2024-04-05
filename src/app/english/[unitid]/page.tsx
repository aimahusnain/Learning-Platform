"use client";

import { QuestionsCarousel } from "@/components/QuestionsCarousel";
import React, { useState } from "react";

const UnitDetails = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Check if the answer is correct (You can implement your logic here)
    const correctAnswer = "is"; // Example correct answer
    setIsCorrect(answer.toLowerCase() === correctAnswer.toLowerCase());
  };

  return (
    // <div className="bg-white p-6 rounded-lg shadow-md">
    //   <h2 className="text-2xl font-bold mb-4">Unit Number 1</h2>
    //   <p className="text-lg font-medium mb-4">am/is/are</p>
    //   <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    //     <label htmlFor="answer" className="text-lg font-medium">
    //       Complete the sentence:
    //     </label>
    //     <div className="flex items-center">
    //       <input
    //         type="text"
    //         id="answer"
    //         value={answer}
    //         onChange={(e) => setAnswer(e.target.value)}
    //         className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    //       />
    //       <button
    //         type="submit"
    //         className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    //   {isCorrect && (
    //     <p className="text-green-500 font-medium mt-4">Correct answer!</p>
    //   )}
    // </div>
    <QuestionsCarousel />
  );
};

export default UnitDetails;
