"use client";

import { StaticData } from "@/lib/staticdata";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import axios from "axios";
import { submitQuestion } from "./QuestionsPageCompo/SubmitQuestion";
import ReTryButton from '@/components/QuestionsPageCompo/ReTry Button'
import Bar from "./QuestionsPageCompo/ProgressBar";

interface Props { }



export const QuestionsCarousel: React.FC<Props> = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/mainquestions?id=clux1ne450001hzc8vv4kgk20`
        );
        const data = response.data;
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
      setProgress((prevProgress) => prevProgress - 100 / (totalQuestions - 1));
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
      setProgress((prevProgress) => prevProgress + 100 / (totalQuestions - 1));
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }
  };

  const handleCheckAnswer = () => {
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const CheckSubmit = async () => {
    try {
      const data = await submitQuestion();
      setIsSubmitted(
        data.success && data.data.length > 0 && data.data[0].submitted
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  CheckSubmit();

  // clux1ne450001hzc8vv4kgk20


  // async function SearchedQuestions(id: string) {
  //   const res = await fetch(`${StaticData.SiteURL}/api/questions?id=${id}`);
  //   const data = await res.json();

  //   if (data.success) return data.data;
  // }

  return (
    <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-screen items-center justify-between">
        <div className="w-full flex flex-col">
          {!isSubmitted && (

            <div className="w-full flex items-center text-center justify-center gap-3">
            <h2>
              {count}/{questions.length}
            </h2>
          </div>
          )}
          <div className="flex w-full items-center gap-3">
            <Button onClick={router.back} variant="secondary" size="icon">
              <X />
            </Button>
            {isSubmitted === false ? (
              <Progress value={progress} className="w-full h-4 bg-gray-300" />
            ) : (
            <Bar />
            )}

            {isSubmitted === true ? (
              <ReTryButton />
            ) : (
              <Submitofmy county={count} />
            )}
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
            onClick={handleCheckAnswer}
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
