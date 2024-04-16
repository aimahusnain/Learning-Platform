"use client";

import ReTryButton from "@/components/QuestionsPageCompo/ReTry Button";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import { submitQuestion } from "./QuestionsPageCompo/SubmitQuestion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
import { Progress } from "./ui/progress";
import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";

async function SaveMainQuestion(
  mainQuestionsId: any,
  userAnswer: any,
  correct: boolean
) {
  try {
    const res = await fetch(`${StaticData.SiteURL}/api/saveuserquestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mainQuestionsId: mainQuestionsId,
        userAnswer: userAnswer,
        correct: correct,
        userEmail: "aimahusnain@gmail.com",
      }),
    });
    const data = await res.json();

    console.log(data, "data123");

    if (data && data.success) {
      console.log("Data POST Successfully!");
    } else {
      console.error("Failed to save main question:", data.message);
    }
  } catch (error) {
    console.error("Error saving main question:", error);
  }
}

interface Props {
  questionid: any;
}

interface MainQuestion {
  id: string;
  userAnswer: string;
  correct: boolean;
  userEmail: string;
  mainQuestionsId: string;
}

export const QuestionsCarousel: React.FC<Props> = ({ questionid }) => {
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [mainQuestions, setMainQuestions] = useState<MainQuestion[]>([]);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/mainquestions?id=${questionid}`
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
      setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
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
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }

    SaveMainQuestion(
      questions[currentQuestionIndex]?.id,
      userAnswer,
      userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()
        ? true
        : false
    );
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

  const CheckSubmitAnswer = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
      setCount(count + 1);
    } else {
      setFeedback("Incorrect!");
    }

    handleCheckAnswer();
    SaveMainQuestion(
      questions[currentQuestionIndex]?.id,
      userAnswer,
      userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()
        ? true
        : false
    );
  };

  console.log(questions[currentQuestionIndex]?.id);

  return (
    <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-screen items-center justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full mb-6 flex items-center text-center justify-center text-2xl font-bold gap-3">
            <h1>Name of Question</h1>
          </div>
          <div className="flex w-full justify-between items-center gap-3">
            <Button onClick={router.back} variant="destructive" size="icon">
              <X />
            </Button>
            <div className="ml-32">
              {isSubmitted === false ? (
                <Badge variant="secondary">Saved</Badge>
              ) : (
                <Badge variant="secondary">Submitted</Badge>
              )}
            </div>
            <div className="flex gap-6 items-center">
              {isSubmitted === false ? (
                <h2>
                  <b>
                    {count}/{questions.length}
                  </b>{" "}
                   Total Points
                </h2>
              ) : (
                <SubmittedMarks totalLength={questions.length} />
              )}
              {isSubmitted === true ? (
                <ReTryButton />
              ) : (
                <Submitofmy county={count} />
              )}
            </div>
          </div>
          <div className="flex w-full items-center gap-3">
            {isSubmitted === false && (
              <Progress
                value={progress}
                className="w-full mt-5 h-4 bg-gray-300"
              />
            )}
          </div>
        </div>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 capitalize">
            {questions[currentQuestionIndex]?.whatquestion}
          </h2>
          {!isSubmitted && (
            <Input
              type="text"
              placeholder="Type your answer..."
              value={userAnswer}
              onChange={handleInputChange}
            />
          )}
          {showCorrectAnswer && isSubmitted && (
            <div className="my-4 text-center capitalize font-sans font-bold text-green-500">
              Correct Answer: {questions[currentQuestionIndex]?.answer}
            </div>
          )}{" "}
          {isSubmitted && (
            <SubmitTrueorFalse
              questionid={questions[currentQuestionIndex]?.id}
            />
          )}
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
          {isSubmitted && (
            <Button onClick={() => setShowCorrectAnswer(true)}>
              Show the Answer
            </Button>
          )}
          {!isSubmitted && (
            <Button
              onClick={CheckSubmitAnswer}
              variant="default"
              disabled={isSubmitted}
            >
              Check Answer
            </Button>
          )}

          <Button onClick={handleForwardQuestion} variant="outline">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
