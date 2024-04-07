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
  const segments = totalQuestions + 1;

  const handleSkipQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
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
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  return (
    <div className="mx-20">
      <Progress value={progress} className="bg-slate-200" />
      <div className="h-screen py-14 flex flex-col items-center justify-between">
        <div className="text-center mb-8">
          {sampleQuestions[currentQuestionIndex].question}
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Type your answer..."
          value={userAnswer}
          onChange={handleInputChange}
        />
        {feedback && <div className="mb-4">{feedback}</div>}
        {feedback ? (
          <div className="flex w-full justify-end">
            <Button size="lg" onClick={handleNextQuestion}>
              Next
            </Button>
          </div>
        ) : (
          <div className="flex w-full justify-between">
            <Button size="lg" onClick={handleSkipQuestion}>
              Skip
            </Button>
            <Button size="lg" variant="success" onClick={handleSubmitAnswer}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
