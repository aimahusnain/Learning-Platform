"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import QuestionsPageInput from "./QuestionsPageCompo/Input";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";
import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
import { SaveMainQuestion } from "./QuestionsPageCompo/saveuserquestionwithemail";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { StaticData } from "@/lib/staticdata";
import ReTryButton from "@/components/QuestionsPageCompo/ReTry Button";
import { Lightbulb, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  questionid: any;
}

export const QuestionsCarousel: React.FC<Props> = ({ questionid }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userAnswers2, setUserAnswers2] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]); // Add this state

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
          setUserAnswers2(
            data.data.map((question: any) =>
              question.answer2 ? "" : undefined
            )
          );
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
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
      setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
    }
  };

  const handleForwardQuestion = () => {
    const correctAnswer1 =
      questions[currentQuestionIndex].answer1.toLowerCase();
    const correctAnswer2 =
      questions[currentQuestionIndex].answer2?.toLowerCase();

    const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
    const userAnswer2 = userAnswers2[currentQuestionIndex]
      ?.trim()
      .toLowerCase();

    const isAnswer1Correct =
      userAnswer1.trim().toLocaleLowerCase() ===
      correctAnswer1.trim().toLocaleLowerCase();
    const isAnswer2Correct = userAnswer2 === correctAnswer2;

    const isBothCorrect = correctAnswer2
      ? (isAnswer1Correct && isAnswer2Correct) ||
        (userAnswer1 === correctAnswer2 && userAnswer2 === correctAnswer1)
      : isAnswer1Correct;

    if (isAnswer1Correct) {
      setUserAnswers((prevUserAnswers) => [
        ...prevUserAnswers.slice(0, currentQuestionIndex),
        userAnswer1,
        ...prevUserAnswers.slice(currentQuestionIndex + 1),
      ]);
    }

    if (isAnswer2Correct) {
      setUserAnswers2((prevUserAnswers2) => [
        ...prevUserAnswers2.slice(0, currentQuestionIndex),
        userAnswer2,
        ...prevUserAnswers2.slice(currentQuestionIndex + 1),
      ]);
    }

    if (isBothCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    if (userAnswers[currentQuestionIndex].trim().toLowerCase() !== "") {
      SaveMainQuestion(
        userAnswers2[currentQuestionIndex],
        questions[currentQuestionIndex]?.id,
        userAnswers[currentQuestionIndex],
        isAnswer1Correct,
        isAnswer2Correct,
        String(session?.user?.email),
        questionid
      );
    }

    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
    }
  };

  const handleForwardQuestionwithoutSaveMainQuestion = () => {
    const correctAnswer = questions[currentQuestionIndex].answer1.toLowerCase();
    if (
      userAnswers[currentQuestionIndex].trim().toLowerCase() === correctAnswer
    ) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
    }
  };

  const handleCheckAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers1 = [
      currentQuestion?.answer1?.toLowerCase(),
      currentQuestion?.whatquestionOption1?.toLowerCase(),
      currentQuestion?.whatquestionOption2?.toLowerCase(),
    ].filter(Boolean);
  
    const correctAnswer2 = currentQuestion?.answer2?.toLowerCase();
  
    const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
    const userAnswer2 = userAnswers2[currentQuestionIndex]?.trim().toLowerCase();
  
    let feedbackMessage1 = "";
    let feedbackMessage2 = "";
  
    if (!userAnswer1) {
      feedbackMessage1 = "Please provide an answer.";
    } else if (correctAnswers1.includes(userAnswer1)) {
      feedbackMessage1 = "Correct!";
    } else {
      feedbackMessage1 = "Incorrect!";
    }
  
    if (correctAnswer2) {
      if (!userAnswer2) {
        feedbackMessage2 = "Please provide an answer.";
      } else if (userAnswer2 === correctAnswer2) {
        feedbackMessage2 = "Correct!";
      } else {
        feedbackMessage2 = "Incorrect!";
      }
    }
  
    const updatedFeedback = [...feedback];
    updatedFeedback[currentQuestionIndex] = feedbackMessage1;
    updatedFeedback[currentQuestionIndex + questions.length] = feedbackMessage2;
    setFeedback(updatedFeedback);
  };
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = event.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserAnswers2 = [...userAnswers2];
    updatedUserAnswers2[currentQuestionIndex] = event.target.value;
    setUserAnswers2(updatedUserAnswers2);
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInputFocused =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if (!isInputFocused) {
        switch (event.key) {
          case "ArrowRight":
            handleForwardQuestion();
            break;
          case "ArrowLeft":
            handlePreviousQuestion();
            break;
          default:
            break;
        }
      }

      if (event.key === "Enter") {
        handleForwardQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestionIndex, userAnswers, userAnswers2]);

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
            <Button
              className="rounded-lg hover:rounded-3xl font-bold transition-all  duration-300"
              onClick={router.back}
              variant="destructive"
              size="icon"
            >
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
            {openedQuestion[0]?.Image === null ? null : (
              <img
                src={openedQuestion[0]?.Image}
                alt="Question Image"
                className="w-[50rem]"
              />
            )}
          </div>
          <h1 className="text-2xl font-bold font-sans text-center">
            {openedQuestion[0]?.name}
            {openedQuestion[0]?.idea && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="mx-2 py-2 px-2 rounded-full border border-black/40">
                    <Lightbulb width={20} />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-md">
                    <p>{openedQuestion[0]?.idea}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </h1>

          <div className="p-5 w-fit text-center">
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {questions[currentQuestionIndex]?.whatquestion}
            </h2>
            {!isSubmitted && (
              <QuestionsPageInput
                userAnswers={userAnswers}
                userAnswers2={userAnswers2}
                currentQuestionIndex={currentQuestionIndex}
                handleInputChange={handleInputChange}
                questions={questions}
                handleInput2Change={handleInput2Change}
                mainQuestionId={questions[currentQuestionIndex]?.id}
                userEmail={session?.user?.email}
                feedback={feedback} // Pass feedback to the child component
              />
            )}
            {isSubmitted && (
              <SubmitTrueorFalse
                handleInput2Change={handleInput2Change}
                userAnswers2={userAnswers2}
                questions={questions}
                mainQuestionId={questions[currentQuestionIndex]?.id}
                currentQuestionIndex={currentQuestionIndex}
                UserEmail={String(session?.user?.email)}
                questionid={questions[currentQuestionIndex]?.id}
              />
            )}
            {showCorrectAnswer && isSubmitted && (
              <div className="my-4 text-center capitalize font-sans font-bold text-green-500">
                Correct Answer: {questions[currentQuestionIndex]?.answer1},{" "}
                {questions[currentQuestionIndex]?.answer2 && (
                  <>{questions[currentQuestionIndex]?.answer2}</>
                )}{" "}
              </div>
            )}{" "}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Button
            onClick={handlePreviousQuestion}
            variant="outline"
            className="border-blue-500/50"
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
              className="bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl hover:rounded-sm font-bold transition-all duration-300"
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
            <Button
              onClick={handleForwardQuestion}
              variant="outline"
              className="border-blue-500/50"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
