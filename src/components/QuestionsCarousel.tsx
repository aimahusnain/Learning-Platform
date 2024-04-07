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
      setProgress((prevProgress) => prevProgress + 100 / segments);
    }
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      return;
    }

    const correctAnswer = sampleQuestions[currentQuestionIndex].answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
    setProgress((prevProgress) => prevProgress + 100 / segments);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === totalQuestions - 1) {
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
    <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-screen items-center justify-between">
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
            <div
              className={`mb-4 text-center font-bold ${
                feedback === "Correct!" ? "text-green-500" : "text-red-500"
              }`}
            >
              {feedback}
            </div>
          )}
        </div>
        <div className="flex w-full justify-between">
          <Button onClick={handleSkipQuestion} variant="outline">
            Skip
          </Button>
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
            <Button
              variant="success"
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim()}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
