"use client";

// Imports
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Submitofmy from "./QuestionsPageCompo/IsSubmit";
import ReTryButton from "./QuestionsPageCompo/ReTry Button";
import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";
import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
import { SaveMainQuestion } from "./QuestionsPageCompo/saveuserquestionwithemail";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Skeleton } from "./ui/skeleton";
import QuestionsPageInput from "./QuestionsPageCompo/Input";

export default function CycleData({ questionid }: { questionid: any }) {
  // All Consts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [openedQuestion, setOpenedQuestion] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const totalQuestions = questions.length;
  const [feedback, setFeedback] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);

  const router = useRouter();
  const { data: session } = useSession();
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch MainQuestions
  useEffect(() => {
    const fetchMainQuestions = async () => {
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
      } finally {
        setLoading(false);
      }
    };

    fetchMainQuestions();
  }, [questionid]);

  // Fetch OpenedQuestions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/questions/openedQuestion?id=${questionid}`
        );
        const data = response.data;
        if (data.success) {
          setOpenedQuestion(data.data);
        } else {
          console.error("Failed to fetch questions:", data.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [questionid]);

  // Check if the question is submitted
  useEffect(() => {
    const checkSubmit = async () => {
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

    if (session) {
      checkSubmit();
    }
  }, [session, questionid]);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentIndex] = event.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  // Next Button
  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setFeedback("");
      setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
    }
  };

  const handleForwardQuestion = () => {
    const userAnswer = userAnswers[currentIndex]?.trim().toLowerCase();
    
    // Check if correctAnswer is an array and iterate over it
    const correctAnswers = questions[currentIndex].answer1.map((answer: string) => answer.toLowerCase());
    
    // Check if userAnswer is in the correctAnswers array
    const isCorrect = correctAnswers.includes(userAnswer);
  
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
  
    setTotalQuestionsAnswered((prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1);
  
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setProgress((prevProgress) => prevProgress + 100 / totalQuestions);
    } else {
      setFeedback("Congratulations! You have completed the lesson.");
    }
  
    SaveMainQuestion(
      questions[currentIndex]?.id,
      userAnswers[currentIndex],
      isCorrect,
      String(session?.user?.email),
      questionid
    );
  };

  // Handle checking the answer
  const handleCheckAnswer = () => {
    const userAnswer = userAnswers[currentIndex]?.toLowerCase().trim();
    const correctAnswers = questions[currentIndex]?.answer1.map((ans: string) =>
      ans.toLowerCase().trim()
    );

    const isCorrect = correctAnswers.includes(userAnswer);
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");

    SaveMainQuestion(
      questions[currentIndex]?.id,
      userAnswers[currentIndex],
      isCorrect,
      String(session?.user?.email),
      questionid
    );
  };

  console.log(questions[currentIndex]?.id)

  return (
    <div className="w-full py-14 px-4 sm:px-6 lg:px-20 h-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col h-full items-center justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full mb-6 flex items-center text-center justify-center gap-3">
            {!isSubmitted && (
              <Progress
                value={progress}
                className="w-full mt-5 h-4 bg-gray-300"
              />
            )}
          </div>
          <div className="flex w-full flex-col sm:flex-row justify-between items-center gap-3">
            <Button onClick={router.back} variant="destructive" size="icon">
              <X />
            </Button>
            <div className="sm:ml-32">
              {!isSubmitted ? (
                <Badge variant="secondary">Saved</Badge>
              ) : (
                <Badge variant="secondary">Submitted</Badge>
              )}
            </div>
            <div className="flex gap-6 items-center mt-4 sm:mt-0">
              {!isSubmitted ? (
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
              {isSubmitted ? (
                <ReTryButton questionid={questionid.toString()} />
              ) : (
                <Submitofmy county={count} questionid={questionid.toString()} />
              )}
            </div>
          </div>
        </div>

        <div className="flex-col flex items-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold">
              <Skeleton className="w-64 h-8 bg-zinc-200" />
              <Skeleton className="w-full max-w-4xl h-48 bg-zinc-300" />
              <Skeleton className="w-64 h-8 bg-zinc-200" />
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold font-sans text-center">
                {openedQuestion[0]?.name}
              </h1>
              {questions[currentIndex]?.Image && (
                <img
                  src={questions[currentIndex]?.Image}
                  alt="Question Image"
                  className="w-full max-w-4xl"
                />
              )}
              <div className="p-5 w-fit text-center">
                <h2 className="text-2xl font-bold mb-4 capitalize">
                  {questions[currentIndex]?.whatquestion}
                </h2>
              </div>
              {!isSubmitted && (
                <QuestionsPageInput
                  userAnswers={userAnswers}
                  currentIndex={currentIndex}
                  handleInputChange={handleInputChange}
                  mainQuestionId={questions[currentIndex]?.id}
                  userEmail={session?.user?.email}
                />
              )}

              {isSubmitted && (
                <SubmitTrueorFalse
                  UserEmail={String(session?.user?.email)}
                  questionid={questions[currentIndex]?.id}
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
            </>
          )}
          {showCorrectAnswer && isSubmitted && (
            <div className="my-4 text-center capitalize font-sans font-bold text-green-500">
              Correct Answer: {questions[currentIndex]?.answer1.join(", ")}
            </div>
          )}{" "}
        </div>

        <div className="flex w-full justify-between mt-4">
          <Button onClick={handlePreviousQuestion} disabled={currentIndex === 0}>
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
          <Button
            onClick={handleForwardQuestion}
            disabled={currentIndex === totalQuestions - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
