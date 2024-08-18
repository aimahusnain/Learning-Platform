"use client";

import ReTryButton from "@/components/QuestionsPageCompo/ReTry Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import { Lightbulb, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import QuestionsPageInput from "./QuestionsPageCompo/Input";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";
import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
import { SaveMainQuestion } from "./QuestionsPageCompo/saveuserquestionwithemail";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Textarea } from "./ui/textarea";

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
  const [questionStatus, setQuestionStatus] = useState<string[]>([]);

  const [questions, setQuestions] = useState<any[]>([]);
  const [openedQuestion, setopenedQuestion] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);
  const userEmail = session?.user?.email;
  const [loading, setLoading] = useState(true);
  const aboutyourself =
    questions[currentQuestionIndex]?.whatquestion === "[yourself]";
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    const fetchUserProgressMainQuestion = async () => {
      try {
        const response = await axios.get<{ data: any }>(
          `${StaticData.SiteURL}/api/GETUserProgressMainQuestion?email=${userEmail}&questionsId=${questionid}`
        );
        const data = response.data;

        if (data) {
          // Use Sets to keep track of unique correct and incorrect answers
          const correctAnswers = new Set<string>();
          const incorrectAnswers = new Set<string>();

          data.data.forEach((item: any) => {
            if (item.correct) {
              correctAnswers.add(item.userAnswer);
            } else {
              incorrectAnswers.add(item.userAnswer);
            }
          });

          setCorrectCount(correctAnswers.size);
          setIncorrectCount(incorrectAnswers.size);
        } else {
          console.error("Failed to fetch user progress: No data received");
        } 
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchUserProgressMainQuestion();
  }, [questionid, userEmail]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setAnsweredCorrectly(Array(questions.length).fill(false));
      setQuestionStatus(Array(questions.length).fill("skipped"));
    }
  }, [questions]);

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
    }
    setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
  };

  const handleForwardQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    const correctAnswers1 = [
      currentQuestion?.answer1?.toLowerCase(),
      currentQuestion?.whatquestionOption1?.toLowerCase(),
      currentQuestion?.whatquestionOption2?.toLowerCase(),
      currentQuestion?.whatquestionOption3?.toLowerCase(),
      currentQuestion?.whatquestionOption4?.toLowerCase(),
    ].filter(Boolean); // Filter out undefined values

    const correctAnswers2 = currentQuestion?.answer2
      ? [currentQuestion?.answer2?.toLowerCase()]
      : [];

    const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
    const userAnswer2 = userAnswers2[currentQuestionIndex]
      ?.trim()
      .toLowerCase();

    const isAnswer1Correct = correctAnswers1.includes(userAnswer1);
    const isAnswer2Correct = correctAnswers2.includes(userAnswer2);

    const isBothCorrect =
      correctAnswers2.length > 0
        ? isAnswer1Correct && isAnswer2Correct
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

    setProgress((prevProgress) => prevProgress + 100 / totalQuestions);

    // if (userAnswers[currentQuestionIndex].trim().toLowerCase() !== "") {
    //   SaveMainQuestion(
    //     userAnswers2[currentQuestionIndex],
    //     questions[currentQuestionIndex]?.id,
    //     userAnswers[currentQuestionIndex],
    //     isAnswer1Correct,
    //     isAnswer2Correct,
    //     String(session?.user?.email),
    //     questionid
    //   );
    // }

    setTotalQuestionsAnswered(
      (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
    );

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
    } else {
      const updatedFeedback = [...feedback];
      updatedFeedback[currentQuestionIndex] = "";
      updatedFeedback[currentQuestionIndex + questions.length] = "";
      setFeedback(updatedFeedback);
    }
  };

  function capitalizeFirstLetter(str: string) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

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
      currentQuestion?.whatquestionOption3?.toLowerCase(),
      currentQuestion?.whatquestionOption4?.toLowerCase(),
    ].filter(Boolean); // Filter out undefined values

    const correctAnswers2 = currentQuestion?.answer2
      ? [currentQuestion?.answer2?.toLowerCase()]
      : [];

    const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
    const userAnswer2 = userAnswers2[currentQuestionIndex]
      ?.trim()
      .toLowerCase();

    let feedbackMessage1 = "";
    let feedbackMessage2 = "";

    let isCorrect = false;

    if (!userAnswer1) {
      feedbackMessage1 = "Please provide an answer.";
    } else if (correctAnswers1.includes(userAnswer1)) {
      feedbackMessage1 = "Correct!";
      isCorrect = true;
    } else {
      feedbackMessage1 = "Incorrect!";
    }

    if (correctAnswers2.length > 0) {
      if (!userAnswer2) {
        feedbackMessage2 = "Please provide an answer for the second question.";
      } else if (correctAnswers2.includes(userAnswer2)) {
        feedbackMessage2 = "Correct!";
        isCorrect = isCorrect && true;
      } else {
        feedbackMessage2 = "Incorrect!";
        isCorrect = false;
      }
    }

    const updatedFeedback = [...feedback];
    updatedFeedback[currentQuestionIndex] = feedbackMessage1;
    updatedFeedback[currentQuestionIndex + questions.length] = feedbackMessage2;
    setFeedback(updatedFeedback);

    const updatedQuestionStatus = [...questionStatus];
    if (isCorrect) {
      updatedQuestionStatus[currentQuestionIndex] = "correct";
    } else {
      updatedQuestionStatus[currentQuestionIndex] = "incorrect";
    }
    setQuestionStatus(updatedQuestionStatus);
  };

  useEffect(() => {
    setProgress((currentQuestionIndex / (totalQuestions - 1)) * 100);
  }, [currentQuestionIndex, totalQuestions]);

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

  // HandleAnswer
  const [questionData, setQuestionData] = useState<any>({
    userAnswer: "",
    userAnswer2: "",
    correct: null,
    correct2: null,
  });

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${StaticData.SiteURL}/api/UserAnswerSaver?email=${userEmail}&mainQuestionsId=${questions[currentQuestionIndex]?.id}`
        );
        const data = response.data;

        if (data.success && data.data) {
          setQuestionData(data.data);
        } else {
          setQuestionData({
            userAnswer: "",
            userAnswer2: "",
            correct: null,
            correct2: null,
          });
        }
      } catch (error) {
        console.error("Error fetching question:", error);
        setQuestionData({
          userAnswer: "",
          userAnswer2: "",
          correct: null,
          correct2: null,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questions[currentQuestionIndex]?.id, userEmail]);

  useEffect(() => {
    setQuestionData((prevData: any) => ({
      ...prevData,
      correct: null,
      correct2: null,
    }));
  }, [currentQuestionIndex]);

  const handleLocalInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: "userAnswer" | "userAnswer2"
  ) => {
    const newValue = event.target.value;
    setQuestionData((prevData: any) => ({
      ...prevData,
      [field]: newValue,
      [field === "userAnswer" ? "correct" : "correct2"]: null,
    }));
    if (field === "userAnswer") {
      handleInputChange(event);
    } else {
      handleInput2Change(event);
    }
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswers1 = [
      currentQuestion?.answer1?.toLowerCase(),
      currentQuestion?.whatquestionOption1?.toLowerCase(),
      currentQuestion?.whatquestionOption2?.toLowerCase(),
      currentQuestion?.whatquestionOption3?.toLowerCase(),
      currentQuestion?.whatquestionOption4?.toLowerCase(),
    ].filter(Boolean);

    const correctAnswers2 = currentQuestion?.answer2
      ? [currentQuestion?.answer2?.toLowerCase()]
      : [];

    const isCorrect1 = correctAnswers1.includes(
      questionData.userAnswer.toLowerCase()
    );
    const isCorrect2 =
      correctAnswers2.length > 0
        ? correctAnswers2.includes(questionData.userAnswer2.toLowerCase())
        : null;

    setQuestionData((prevData: any) => ({
      ...prevData,
      correct: isCorrect1,
      correct2: isCorrect2,
    }));

    return { isCorrect1, isCorrect2 };
  };

  const saveAnswer = async () => {
    const { isCorrect1, isCorrect2 } = checkAnswer();
    try {
      const response = await axios.put(
        `${StaticData.SiteURL}/api/savequestionedit`,
        {
          id: questionData.id,
          email: userEmail,
          mainQuestionsId: questions[currentQuestionIndex]?.id,
          userAnswer: questionData.userAnswer,
          userAnswer2: questionData.userAnswer2,
          correct: isCorrect1,
          correct2: isCorrect2,
        }
      );

      const currentQuestion = questions[currentQuestionIndex];

      const correctAnswers1 = [
        currentQuestion?.answer1?.toLowerCase(),
        currentQuestion?.whatquestionOption1?.toLowerCase(),
        currentQuestion?.whatquestionOption2?.toLowerCase(),
        currentQuestion?.whatquestionOption3?.toLowerCase(),
        currentQuestion?.whatquestionOption4?.toLowerCase(),
      ].filter(Boolean); // Filter out undefined values

      const correctAnswers2 = currentQuestion?.answer2
        ? [currentQuestion?.answer2?.toLowerCase()]
        : [];

      const userAnswer1 = userAnswers[currentQuestionIndex]
        .trim()
        .toLowerCase();
      const userAnswer2 = userAnswers2[currentQuestionIndex]
        ?.trim()
        .toLowerCase();

      const isAnswer1Correct = correctAnswers1.includes(userAnswer1);
      const isAnswer2Correct = correctAnswers2.includes(userAnswer2);

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

      if (response.data.success) {
        setQuestionData(response.data.data);
      } else {
        console.error("Failed to save answer:", response.data.message);
      }
    } catch (error) {
      console.error("Error saving answer:", error);
    }
  };

  return (
   <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center bg-indigo-50">
          <div className="w-full flex flex-col h-screen items-center justify-between">
            <div className="w-full flex flex-col">
              <div className="w-full mb-6 flex items-center text-center justify-center gap-3">
                <Progress value={progress} className="w-full mt-5 h-4 bg-indigo-200" />
                {isSubmitted !== false && (
                  <div className="flex justify-between w-full font-bold text-lg gap-2">
                    <div className="flex justify-between w-full font-bold text-lg gap-2">
                      <p className="text-indigo-600">
                        Total Answered: {questions.length}
                      </p>
                      <p className="text-indigo-500">Correct: {correctCount}</p>
                      <p className="text-indigo-400">
                        Incorrect: {incorrectCount}
                      </p>
                      <p className="text-indigo-300">
                        Skipped: {questions.length - (correctCount + incorrectCount)}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex w-full justify-between items-center gap-3">
                <Button
                  className="rounded-lg hover:rounded-3xl font-bold transition-all duration-300 bg-indigo-600 hover:bg-indigo-700"
                  onClick={router.back}
                  size="icon"
                >
                  <X />
                </Button>
                <div className="ml-32">
                  {isSubmitted === false ? (
                    <Badge variant="secondary" className="bg-indigo-200 text-indigo-700">Saved</Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-indigo-200 text-indigo-700">Submitted</Badge>
                  )}
                </div>
                <div className="flex gap-6 items-center">
                  {isSubmitted === false ? (
                    <h2 className="text-indigo-700 font-bold">
                      {Math.round((currentQuestionIndex / (totalQuestions - 1)) * 100)}%
                      ({currentQuestionIndex + 1}/{totalQuestions})
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
                    <Submitofmy
                      county={count}
                      questionid={questionid.toString()}
                    />
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
                    className="w-[20rem] rounded-lg shadow-md"
                  />
                )}
              </div>
              <h1 className="text-2xl font-bold font-sans text-center text-indigo-800">
                {openedQuestion[0]?.name}
                {openedQuestion[0]?.idea && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="mx-2 py-2 px-2 rounded-full border border-indigo-400 text-indigo-600">
                        <Lightbulb width={20} />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-md bg-indigo-100 text-indigo-800">
                        <p>{openedQuestion[0]?.idea}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </h1>

              <div className="p-5 w-fit text-center">
                <h2 className="text-2xl font-bold mb-4 capitalize text-indigo-700">
                  {aboutyourself ? null : (
                    <>
                      {capitalizeFirstLetter(
                        questions[currentQuestionIndex]?.whatquestion
                      )}
                    </>
                  )}
                </h2>
                {aboutyourself ? (
                  <>
                    <Textarea className="w-96 border-indigo-300 focus:border-indigo-500" />
                  </>
                ) : (
                  <>
                    {!isSubmitted && (
                      <QuestionsPageInput
                        userAnswers={userAnswers}
                        userAnswers2={userAnswers2}
                        currentQuestionIndex={currentQuestionIndex}
                        handleInputChange={handleInputChange}
                        handleInput2Change={handleInput2Change}
                        mainQuestionId={questions[currentQuestionIndex]?.id}
                        handleLocalInputChange={handleLocalInputChange}
                        userEmail={session?.user?.email}
                        questionData={questionData}
                        questions={questions}
                        feedback={feedback}
                      />
                    )}
                  </>
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
                  <div className="my-4 text-center capitalize font-sans font-bold text-indigo-600">
                    Correct Answer: {questions[currentQuestionIndex]?.answer1},
                    {questions[currentQuestionIndex]?.answer2 && (
                      <> {questions[currentQuestionIndex]?.answer2}</>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex w-full justify-between">
              <Button
                onClick={handlePreviousQuestion}
                variant="outline"
                className="border-indigo-500 text-indigo-700 hover:bg-indigo-100"
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              {isSubmitted && (
                <Button onClick={() => setShowCorrectAnswer(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Show the Answer
                </Button>
              )}
              {!isSubmitted && (
                <>
                  {aboutyourself ? (
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9 text-white"
                      disabled={true}
                    >
                      Check
                    </Button>
                  ) : (
                    <Button
                      onClick={saveAnswer}
                      variant="default"
                      className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9 text-white"
                      disabled={isSubmitted}
                    >
                      Check
                    </Button>
                  )}
                </>
              )}
              {isSubmitted === true ? (
                <Button
                  onClick={handleForwardQuestionwithoutSaveMainQuestion}
                  variant="outline"
                  className="border-indigo-500 text-indigo-700 hover:bg-indigo-100"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleForwardQuestion}
                  variant="outline"
                  className="border-indigo-500 text-indigo-700 hover:bg-indigo-100"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
