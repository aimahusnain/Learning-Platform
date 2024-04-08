"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { X } from "lucide-react";
import { StaticData } from "@/lib/staticdata";

interface Props {}

export const QuestionsCarousel: React.FC<Props> = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/mainquestions?id=cluok50v30000oa6trymosjad`
        );
        const data = await response.json();
        if (data.success) {
          setQuestions(data.data);
        } else {
          console.error("Failed to fetch questions:", data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const totalQuestions = questions.length;

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setFeedback("");
    }
  };

  const handleForwardQuestion = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) {
      return;
    }

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
      setCount(count + 1);
    } else {
      setFeedback("Incorrect!");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  useEffect(() => {
    if (totalQuestionsAnswered > 0) {
      const percentage = (correctAnswers / totalQuestions) * 100;
      setProgress(percentage);
    }
  }, [correctAnswers, totalQuestionsAnswered]);

   const [count, setCount] = useState(0);

  return (
    <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-screen items-center justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center text-center justify-center gap-3">
            <h2>
              {count}/{questions.length}
            </h2>
          </div>
          <div className="flex w-full items-center gap-3">
            <Button onClick={router.back} variant="secondary" size="icon">
              <X />
            </Button>
            <Progress value={progress} className="w-full h-4 bg-gray-300" />
            <Button
              variant="success"
              onClick={handleSubmitAnswer}
              disabled={!userAnswer.trim()}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 capitalize">
            {questions[currentQuestionIndex]?.whatquestion}
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
          <Button
            onClick={handlePreviousQuestion}
            variant="outline"
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleSubmitAnswer}
            variant="success"
            className="mr-12"
          >
            Check Answer
          </Button>
          <Button onClick={handleForwardQuestion} variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
