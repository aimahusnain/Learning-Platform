"use client";

import React, { useState } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface Props {}

const sampleQuestions = [
  { question: "Question 1: What is your name?", answer: "John" },
  { question: "Question 2: Where are you from?", answer: "New York" },
  { question: "Question 3: What is your favorite color?", answer: "Blue" },
  { question: "Question 4: Who is your father?", answer: "Dad" },
];

export const QuestionsCarousel: React.FC<Props> = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const totalQuestions = sampleQuestions.length;
  const segments = totalQuestions;

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
    }
  };

  const handleSubmitAnswer = () => {
    const correctAnswer = sampleQuestions[currentQuestionIndex].answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
    // Increment progress upon submission
    setProgress((prevProgress) => prevProgress + 100 / segments);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      // Reached the last question
      setFeedback("Congratulations! You have completed the lesson.");
    } else if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <Progress value={progress} className="w-full h-4 bg-gray-300" />
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">
            {sampleQuestions[currentQuestionIndex].question}
          </h2>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Type your answer..."
            value={userAnswer}
            onChange={handleInputChange}
          />
          {feedback && (
            <div className="mb-4 text-center text-green-500 font-bold">
              {feedback}
            </div>
          )}
          <div className="flex justify-between">
            {feedback ? (
              <Button
                onClick={handleNextQuestion}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {currentQuestionIndex < totalQuestions - 1
                  ? "Next"
                  : "Happy Happy for your Lesson"}
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleSkipQuestion}
                  className="bg-gray-400 hover:bg-gray-500 text-white"
                >
                  Skip
                </Button>
                <Button variant="success" onClick={handleSubmitAnswer}>
                  Submit
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
