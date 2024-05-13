"use client";

import ReTryButton from "@/components/QuestionsPageCompo/ReTry Button";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";
import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { SaveMainQuestion } from "./QuestionsPageCompo/saveuserquestionwithemail";
import QuestionsPageInput from "./QuestionsPageCompo/Input";
import Image from "next/image";

interface Props {
  questionid: any;
}

export const QuestionsCarousel: React.FC<Props> = ({ questionid }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [openedQuestion, setopenedQuestion] = useState<any[]>([]);
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
          setUserAnswers(Array(data.data.length).fill(""));
        } else {
          console.error("Failed to fetch questions:", data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/questions/openedQuestion?id=${questionid}`
        );
        const data = response.data;
        if (data.success) {
          setopenedQuestion(data.data);
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

    if (
      userAnswers[currentQuestionIndex].trim().toLowerCase() ===
      correctAnswer.toLowerCase()
    ) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }

    SaveMainQuestion(
      questions[currentQuestionIndex]?.id,
      userAnswers[currentQuestionIndex],
      userAnswers[currentQuestionIndex].trim().toLowerCase() ===
        correctAnswer.toLowerCase(),
      String(session?.user?.email),
      questionid
    );
  };

  const handleForwardQuestionwithoutSaveMainQuestion = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (
      userAnswers[currentQuestionIndex].trim().toLowerCase() ===
      correctAnswer.toLowerCase()
    ) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }
  };

  const handleCheckAnswer = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const userAnswer = userAnswers[currentQuestionIndex];

    if (!userAnswer.trim()) {
      setFeedback("Please provide an answer.");
      return;
    }

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
      setCount((prevCount) => prevCount + 1);
    } else {
      setFeedback("Incorrect!");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = event.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const CheckSubmit = async () => {
    try {
      const response = await fetch(
        `${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}&id=${questionid}`
      );

      const data = await response.json();

      setIsSubmitted(
        data.success && data.data.length > 0 && data.data[0].submitted
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  CheckSubmit();

  console.log(questions[currentQuestionIndex]?.id);

  return (
    <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-screen items-center justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full mb-6 flex items-center text-center justify-center gap-3">
            {isSubmitted === false && (
              <Progress
                value={progress}
                className="w-full mt-5 h-4 bg-gray-300"
              />
            )}
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
                <SubmittedMarks
                  questionId={questionid.toString()}
                  totalLength={questions.length}
                />
              )}
              {isSubmitted === true ? (
                <ReTryButton questionid={questionid.toString()} />
              ) : (
                <Submitofmy county={count} questionid={questionid.toString()} />
              )}
            </div>
          </div>
        </div>
        <div className="flex-col flex items-center">
          <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold">
            {!openedQuestion[0]?.image ? (
              <img
              src={openedQuestion[0]?.Image}
              alt="Question Image"
              className="w-[50rem]"
              />
            ) : null}
          </div>
          <div className="p-5 w-fit text-center">
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {questions[currentQuestionIndex]?.whatquestion}
            </h2>
            {!isSubmitted && (
              <QuestionsPageInput
                userAnswers={userAnswers}
                currentQuestionIndex={currentQuestionIndex}
                handleInputChange={handleInputChange}
                mainQuestionId={questions[currentQuestionIndex]?.id}
                userEmail={session?.user?.email}
              />
            )}
            {showCorrectAnswer && isSubmitted && (
              <div className="my-4 text-center capitalize font-sans font-bold text-green-500">
                Correct Answer: {questions[currentQuestionIndex]?.answer}
              </div>
            )}{" "}
            {isSubmitted && (
              <SubmitTrueorFalse
                UserEmail={String(session?.user?.email)}
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
              onClick={handleCheckAnswer}
              variant="default"
              disabled={isSubmitted}
            >
              Check Answer
            </Button>
          )}

          {isSubmitted === true ? (
            <Button
              onClick={handleForwardQuestionwithoutSaveMainQuestion}
              variant="outline"
            >
              Next
            </Button>
          ) : (
            <Button onClick={handleForwardQuestion} variant="outline">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
