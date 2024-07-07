// "use client";

// import ReTryButton from "@/components/QuestionsPageCompo/ReTry Button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { StaticData } from "@/lib/staticdata";
// import axios from "axios";
// import { Lightbulb, X } from "lucide-react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Loader from "./Loader";
// import QuestionsPageInput from "./QuestionsPageCompo/Input";
// import Submitofmy from "./QuestionsPageCompo/IsSubmit";
// import SubmitTrueorFalse from "./QuestionsPageCompo/SubmitTrueorFalse";
// import SubmittedMarks from "./QuestionsPageCompo/SubmittedMarks";
// import { SaveMainQuestion } from "./QuestionsPageCompo/saveuserquestionwithemail";
// import { SaveMainQuestionYouSelf } from "./QuestionsPageCompo/SaveMainQuestionYouSelf";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { Progress } from "./ui/progress";
// import { Textarea } from "./ui/textarea";

// interface Props {
//   questionid: any;
// }

// export const QuestionsCarousel: React.FC<Props> = ({ questionid }) => {
//   const router = useRouter();
//   const { data: session } = useSession();

//   const [progress, setProgress] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<string[]>([]);
//   const [userAnswers2, setUserAnswers2] = useState<string[]>([]);
//   const [feedback, setFeedback] = useState<string[]>([]); // Add this state
//   const [questionStatus, setQuestionStatus] = useState<string[]>([]);
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [openedQuestion, setopenedQuestion] = useState<any[]>([]);
//   const [count, setCount] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
//   const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
//   const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([]);
//   const userEmail = session?.user?.email;
//   const [loading, setLoading] = useState(true);
//   const aboutyourself =
//     questions[currentQuestionIndex]?.whatquestion === "[yourself]";

//   const [userprogressmainquestionid, setUserprogressmainquestionid] = useState<any>()    
//   // Inside your component, define state variables to store counts
//   const [correctCount, setCorrectCount] = useState(0);
//   const [incorrectCount, setIncorrectCount] = useState(0);

//   // Inside your useEffect where you fetch user progress
//   useEffect(() => {
//     const fetchUserProgressMainQuestion = async () => {
//       try {
//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/GETUserProgressMainQuestion?email=${userEmail}&questionsId=${questionid}`
//         );
//         const data = response.data;

//         if (data.success) {
//           // Count correct and incorrect answers
//           let correct = 0;
//           let incorrect = 0;

//           data.data.forEach((item: any) => {
//             if (item.correct === true) {
//               correct++;
//             } else {
//               incorrect++;
//             }
//           });

//           // Update state variables with the counts
//           setCorrectCount(correct);
//           setIncorrectCount(incorrect);
//         } else {
//           console.error("Failed to fetch user progress:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching user progress:", error);
//       }
//     };

//     fetchUserProgressMainQuestion();
//   }, [questionid, userEmail]);

  
//   tuseEffect(() => {
//     const fetchUserProgressMainQuestionId = async () => {
//       try {
//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/fetchuserprogressmainquestionid?userEmail=${userEmail}&questionId=${questions[currentQuestionIndex]?.id}`
//         );
//         const data = response.data;
        
//         setUserprogressmainquestionid(data)
        
//       } catch (error) {
//         console.error("Error fetching user progress:", error);
//       }
//     };

//     fetchUserProgressMainQuestionId();
//   }, [questionid, userEmail]);


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust the duration as needed

//     return () => clearTimeout(timer); // Clear the timeout on component unmount
//   }, []);

//   useEffect(() => {
//     if (questions.length > 0) {
//       setAnsweredCorrectly(Array(questions.length).fill(false));
//       setQuestionStatus(Array(questions.length).fill("skipped"));
//     }
//   }, [questions]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/mainquestions?id=${questionid}`
//         );
//         const data = response.data;
//         if (data.success) {
//           setQuestions(data.data);
//           setUserAnswers(Array(data.data.length).fill(""));
//           setUserAnswers2(
//             data.data.map((question: any) =>
//               question.answer2 ? "" : undefined
//             )
//           );
//         } else {
//           console.error("Failed to fetch questions:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/questions/openedQuestion?id=${questionid}`
//         );
//         const data = response.data;
//         if (data.success) {
//           setopenedQuestion(data.data);
//         } else {
//           console.error("Failed to fetch questions:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const totalQuestions = questions.length;

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//       const updatedFeedback = [...feedback];
//       updatedFeedback[currentQuestionIndex] = "";
//       updatedFeedback[currentQuestionIndex + questions.length] = "";
//       setFeedback(updatedFeedback);
//     }
//     setProgress((prevProgress) => prevProgress - 100 / totalQuestions);
//   };

//   const handleForwardQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     const correctAnswers1 = [
//       currentQuestion?.answer1?.toLowerCase(),
//       currentQuestion?.whatquestionOption1?.toLowerCase(),
//       currentQuestion?.whatquestionOption2?.toLowerCase(),
//       currentQuestion?.whatquestionOption3?.toLowerCase(),
//       currentQuestion?.whatquestionOption4?.toLowerCase(),
//     ].filter(Boolean);

//     const correctAnswers2 = currentQuestion?.answer2
//       ? [currentQuestion?.answer2?.toLowerCase()]
//       : [];

//     const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
//     const userAnswer2 = userAnswers2[currentQuestionIndex]
//       ?.trim()
//       .toLowerCase();

//     const isAnswer1Correct = correctAnswers1.includes(userAnswer1);
//     const isAnswer2Correct = correctAnswers2.includes(userAnswer2);

//     const isBothCorrect =
//       correctAnswers2.length > 0
//         ? isAnswer1Correct && isAnswer2Correct
//         : isAnswer1Correct;

//     if (isAnswer1Correct) {
//       setUserAnswers((prevUserAnswers) => [
//         ...prevUserAnswers.slice(0, currentQuestionIndex),
//         userAnswer1,
//         ...prevUserAnswers.slice(currentQuestionIndex + 1),
//       ]);
//     }

//     if (isAnswer2Correct) {
//       setUserAnswers2((prevUserAnswers2) => [
//         ...prevUserAnswers2.slice(0, currentQuestionIndex),
//         userAnswer2,
//         ...prevUserAnswers2.slice(currentQuestionIndex + 1),
//       ]);
//     }

//     if (isBothCorrect) {
//       setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
//     }

//     setProgress((prevProgress) => prevProgress + 100 / totalQuestions);

//     if (userAnswers[currentQuestionIndex].trim().toLowerCase() !== "") {
//       SaveMainQuestion(
//         userAnswers2[currentQuestionIndex],
//         questions[currentQuestionIndex]?.id,
//         userAnswers[currentQuestionIndex],
//         isAnswer1Correct,
//         isAnswer2Correct,
//         String(session?.user?.email),
//         questionid
//       );
//     }

//     setTotalQuestionsAnswered(
//       (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
//     );

//     if (currentQuestionIndex < totalQuestions - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       const updatedFeedback = [...feedback];
//       updatedFeedback[currentQuestionIndex] = "";
//       updatedFeedback[currentQuestionIndex + questions.length] = "";
//       setFeedback(updatedFeedback);
//     } else {
//       const updatedFeedback = [...feedback];
//       updatedFeedback[currentQuestionIndex] = "";
//       updatedFeedback[currentQuestionIndex + questions.length] = "";
//       setFeedback(updatedFeedback);
//     }
//   };

//   const saveanswer = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     const correctAnswers1 = [
//       currentQuestion?.answer1?.toLowerCase(),
//       currentQuestion?.whatquestionOption1?.toLowerCase(),
//       currentQuestion?.whatquestionOption2?.toLowerCase(),
//       currentQuestion?.whatquestionOption3?.toLowerCase(),
//       currentQuestion?.whatquestionOption4?.toLowerCase(),
//     ].filter(Boolean); // Filter out undefined values

//     const correctAnswers2 = currentQuestion?.answer2
//       ? [currentQuestion?.answer2?.toLowerCase()]
//       : [];

//     const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
//     const userAnswer2 = userAnswers2[currentQuestionIndex]
//       ?.trim()
//       .toLowerCase();

//     const isAnswer1Correct = correctAnswers1.includes(userAnswer1);
//     const isAnswer2Correct = correctAnswers2.includes(userAnswer2);

//     const isBothCorrect =
//       correctAnswers2.length > 0
//         ? isAnswer1Correct && isAnswer2Correct
//         : isAnswer1Correct;

//     if (isAnswer1Correct) {
//       setUserAnswers((prevUserAnswers) => [
//         ...prevUserAnswers.slice(0, currentQuestionIndex),
//         userAnswer1,
//         ...prevUserAnswers.slice(currentQuestionIndex + 1),
//       ]);
//     }

//     if (isAnswer2Correct) {
//       setUserAnswers2((prevUserAnswers2) => [
//         ...prevUserAnswers2.slice(0, currentQuestionIndex),
//         userAnswer2,
//         ...prevUserAnswers2.slice(currentQuestionIndex + 1),
//       ]);
//     }

//     if (isBothCorrect) {
//       setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
//     }

//     SaveMainQuestionYouSelf(
//       questions[currentQuestionIndex]?.id,
//       userAnswers[currentQuestionIndex],
//       isAnswer1Correct,
//       String(session?.user?.email)
//     );

//     setTotalQuestionsAnswered(
//       (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
//     );
//   };

//   const handleForwardQuestionwithoutSaveMainQuestion = () => {
//     const correctAnswer = questions[currentQuestionIndex].answer1.toLowerCase();
//     if (
//       userAnswers[currentQuestionIndex].trim().toLowerCase() === correctAnswer
//     ) {
//       setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
//     }

//     setTotalQuestionsAnswered(
//       (prevTotalQuestionsAnswered) => prevTotalQuestionsAnswered + 1
//     );

//     if (currentQuestionIndex < totalQuestions - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       const updatedFeedback = [...feedback];
//       updatedFeedback[currentQuestionIndex] = "";
//       updatedFeedback[currentQuestionIndex + questions.length] = "";
//       setFeedback(updatedFeedback);
//     } else {
//       const updatedFeedback = [...feedback];
//       updatedFeedback[currentQuestionIndex] = "";
//       updatedFeedback[currentQuestionIndex + questions.length] = "";
//       setFeedback(updatedFeedback);
//     }
//   };

//   function capitalizeFirstLetter(str: string) {
//     if (!str) return "";
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   }

//   const handleCheckAnswer = () => {
//     const currentQuestion = questions[currentQuestionIndex];

//     const correctAnswers1 = [
//       currentQuestion?.answer1?.toLowerCase(),
//       currentQuestion?.whatquestionOption1?.toLowerCase(),
//       currentQuestion?.whatquestionOption2?.toLowerCase(),
//       currentQuestion?.whatquestionOption3?.toLowerCase(),
//       currentQuestion?.whatquestionOption4?.toLowerCase(),
//     ].filter(Boolean); // Filter out undefined values

//     const correctAnswers2 = currentQuestion?.answer2
//       ? [currentQuestion?.answer2?.toLowerCase()]
//       : [];

//     const userAnswer1 = userAnswers[currentQuestionIndex].trim().toLowerCase();
//     const userAnswer2 = userAnswers2[currentQuestionIndex]
//       ?.trim()
//       .toLowerCase();

//     let feedbackMessage1 = "";
//     let feedbackMessage2 = "";

//     let isCorrect = false;

//     if (!userAnswer1) {
//       feedbackMessage1 = "Please provide an answer.";
//     } else if (correctAnswers1.includes(userAnswer1)) {
//       feedbackMessage1 = "Correct!";
//       isCorrect = true;
//     } else {
//       feedbackMessage1 = "Incorrect!";
//     }

//     if (correctAnswers2.length > 0) {
//       if (!userAnswer2) {
//         feedbackMessage2 = "Please provide an answer for the second question.";
//       } else if (correctAnswers2.includes(userAnswer2)) {
//         feedbackMessage2 = "Correct!";
//         isCorrect = isCorrect && true;
//       } else {
//         feedbackMessage2 = "Incorrect!";
//         isCorrect = false;
//       }
//     }

//     const updatedFeedback = [...feedback];
//     updatedFeedback[currentQuestionIndex] = feedbackMessage1;
//     updatedFeedback[currentQuestionIndex + questions.length] = feedbackMessage2;
//     setFeedback(updatedFeedback);

//     const updatedQuestionStatus = [...questionStatus];
//     if (isCorrect) {
//       updatedQuestionStatus[currentQuestionIndex] = "correct";
//     } else {
//       updatedQuestionStatus[currentQuestionIndex] = "incorrect";
//     }
//     setQuestionStatus(updatedQuestionStatus);
//   };

//   useEffect(() => {
//     setProgress((currentQuestionIndex / (totalQuestions - 1)) * 100);
//   }, [currentQuestionIndex, totalQuestions]);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const updatedUserAnswers = [...userAnswers];
//     updatedUserAnswers[currentQuestionIndex] = event.target.value;
//     setUserAnswers(updatedUserAnswers);
//   };

//   const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const updatedUserAnswers2 = [...userAnswers2];
//     updatedUserAnswers2[currentQuestionIndex] = event.target.value;
//     setUserAnswers2(updatedUserAnswers2);
//   };

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const CheckSubmit = async () => {
//     try {
//       const response = await fetch(
//         `${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}&id=${questionid}`
//       );

//       const data = await response.json();

//       setIsSubmitted(
//         data.success && data.data.length > 0 && data.data[0].submitted
//       );
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   CheckSubmit();

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       const target = event.target as HTMLElement;
//       const isInputFocused =
//         target.tagName === "INPUT" || target.tagName === "TEXTAREA";

//       if (!isInputFocused) {
//         switch (event.key) {
//           case "ArrowRight":
//             handleForwardQuestion();
//             break;
//           case "ArrowLeft":
//             handlePreviousQuestion();
//             break;
//           default:
//             break;
//         }
//       }

//       if (event.key === "Enter") {
//         handleForwardQuestion();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [currentQuestionIndex, userAnswers, userAnswers2]);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
//           <div className="w-full flex flex-col h-screen items-center justify-between">
//             <div className="w-full flex flex-col">
//               <div className="w-full mb-6 flex items-center text-center justify-center gap-3">
//                 <Progress value={progress} className="w-full mt-5 h-4" />
//                 {isSubmitted !== false && (
//                   <div className="flex justify-between w-full font-bold text-lg gap-2">
//                     <div className="flex justify-between w-full font-bold text-lg gap-2">
//                       <p className="text-green-500">
//                         Total Answered: {questions.length}
//                       </p>
//                       <p className="text-blue-500">Correct: {correctCount}</p>
//                       <p className="              text-red-500">
//                         Incorrect: {incorrectCount}
//                       </p>
//                       <p className="text-gray-500">
//                         Skipped:{" "}
//                         {questions.length - (correctCount + incorrectCount)}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="flex w-full justify-between items-center gap-3">
//                 <Button
//                   className="rounded-lg hover:rounded-3xl font-bold transition-all  duration-300"
//                   onClick={router.back}
//                   variant="destructive"
//                   size="icon"
//                 >
//                   <X />
//                 </Button>
//                 <div className="ml-32">
//                   {isSubmitted === false ? (
//                     <Badge variant="secondary">Saved</Badge>
//                   ) : (
//                     <Badge variant="secondary">Submitted</Badge>
//                   )}
//                 </div>
//                 <div className="flex gap-6 items-center">
//                   {isSubmitted === false ? (
//                     <h2>
//                       {Math.round(
//                         (currentQuestionIndex / (totalQuestions - 1)) * 100
//                       )}
//                       % ({currentQuestionIndex + 1}/{totalQuestions})
//                     </h2>
//                   ) : (
//                     <SubmittedMarks
//                       questionId={questionid.toString()}
//                       totalLength={questions.length}
//                     />
//                   )}
//                   {isSubmitted === true ? (
//                     <ReTryButton questionid={questionid.toString()} />
//                   ) : (
//                     <Submitofmy
//                       county={count}
//                       questionid={questionid.toString()}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="flex-col flex items-center">
//               <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold">
//                 {openedQuestion[0]?.Image === null ? null : (
//                   <img
//                     src={openedQuestion[0]?.Image}
//                     alt="Question Image"
//                     className="w-[20rem]"
//                   />
//                 )}
//               </div>
//               <h1 className="text-2xl font-bold font-sans text-center ">
//                 {openedQuestion[0]?.name}
//                 {openedQuestion[0]?.idea && (
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger className="mx-2 py-2 px-2 rounded-full border border-black/40">
//                         <Lightbulb width={20} />
//                       </TooltipTrigger>
//                       <TooltipContent className="max-w-md">
//                         <p>{openedQuestion[0]?.idea}</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 )}
//               </h1>

//               <div className="p-5 w-fit text-center">
//                 <h2 className="text-2xl font-bold mb-4 capitalize">
//                   {aboutyourself ? null : (
//                     <>
//                       {capitalizeFirstLetter(
//                         questions[currentQuestionIndex]?.whatquestion
//                       )}
//                     </>
//                   )}
//                 </h2>
//                 {aboutyourself ? (
//                   <>
//                     <Textarea className="w-96" />
//                   </>
//                 ) : (
//                   <>
//                     {!isSubmitted && (
//                       <QuestionsPageInput
//                         userAnswers={userAnswers}
//                         userAnswers2={userAnswers2}
//                         currentQuestionIndex={currentQuestionIndex}
//                         userprogressmainquestionid={userprogressmainquestionid}
//                         handleInputChange={handleInputChange}
//                         questions={questions}
//                         handleInput2Change={handleInput2Change}
//                         mainQuestionId={questions[currentQuestionIndex]?.id}
//                         userEmail={session?.user?.email}
//                         feedback={feedback}
//                       />
//                     )}
//                   </>
//                 )}
//                 {isSubmitted && (
//                   <SubmitTrueorFalse
//                     handleInput2Change={handleInput2Change}
//                     userAnswers2={userAnswers2}
//                     questions={questions}
//                     mainQuestionId={questions[currentQuestionIndex]?.id}
//                     currentQuestionIndex={currentQuestionIndex}
//                     UserEmail={String(session?.user?.email)}
//                     questionid={questions[currentQuestionIndex]?.id}
//                   />
//                 )}
//                 {showCorrectAnswer && isSubmitted && (
//                   <div className="my-4 text-center capitalize font-sans font-bold text-green-500">
//                     Correct Answer: {questions[currentQuestionIndex]?.answer1},{" "}
//                     {questions[currentQuestionIndex]?.answer2 && (
//                       <>{questions[currentQuestionIndex]?.answer2}</>
//                     )}{" "}
//                   </div>
//                 )}{" "}
//               </div>
//             </div>

//             <div className="flex w-full justify-between">
//               <Button
//                 onClick={handlePreviousQuestion}
//                 variant="outline"
//                 className="border-blue-500/50"
//                 disabled={currentQuestionIndex === 0}
//               >
//                 Previous
//               </Button>
//               {isSubmitted && (
//                 <Button onClick={() => setShowCorrectAnswer(true)}>
//                   Show the Answer
//                 </Button>
//               )}
//               {!isSubmitted && (
//                 <>
//                   {aboutyourself ? (
//                     <Button
//                       variant="default"
//                       className="bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9"
//                       disabled={true}
//                     >
//                       Check
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={handleCheckAnswer}
//                       variant="default"
//                       className="bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9"
//                       disabled={isSubmitted}
//                     >
//                       Check
//                     </Button>
//                   )}
//                 </>
//               )}

//               {isSubmitted === true ? (
//                 <Button
//                   onClick={handleForwardQuestionwithoutSaveMainQuestion}
//                   variant="outline"
//                 >
//                   Next
//                 </Button>
//               ) : (
//                 <>
//                   {aboutyourself ? (
//                     <Button
//                       onClick={saveanswer}
//                       variant="outline"
//                       className="border-blue-500/50"
//                     >
//                       Save
//                     </Button>
//                   ) : (
//                     <Button
//                       onClick={handleForwardQuestion}
//                       variant="outline"
//                       className="border-blue-500/50"
//                     >
//                       Next
//                     </Button>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };




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
import { SaveMainQuestionYouSelf } from "./QuestionsPageCompo/SaveMainQuestionYouSelf";

import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

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

  const [userprogressmainquestionid, setUserprogressmainquestionid] = useState<any>()    

  // Inside your component, define state variables to store counts
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  // Inside your useEffect where you fetch user progress
  useEffect(() => {
    const fetchUserProgressMainQuestion = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/GETUserProgressMainQuestion?email=${userEmail}&questionsId=${questionid}`
        );
        const data = response.data;

        if (data.success) {
          // Count correct and incorrect answers
          let correct = 0;
          let incorrect = 0;

          data.data.forEach((item: any) => {
            if (item.correct === true) {
              correct++;
            } else {
              incorrect++;
            }
          });

          // Update state variables with the counts
          setCorrectCount(correct);
          setIncorrectCount(incorrect);
        } else {
          console.error("Failed to fetch user progress:", data.message);
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full py-14 px-20 h-screen flex flex-col items-center justify-center">
          <div className="w-full flex flex-col h-screen items-center justify-between">
            <div className="w-full flex flex-col">
              <div className="w-full mb-6 flex items-center text-center justify-center gap-3">
                <Progress value={progress} className="w-full mt-5 h-4" />
                {isSubmitted !== false && (
                  <div className="flex justify-between w-full font-bold text-lg gap-2">
                    <div className="flex justify-between w-full font-bold text-lg gap-2">
                      <p className="text-green-500">
                        Total Answered: {questions.length}
                      </p>
                      <p className="text-blue-500">Correct: {correctCount}</p>
                      <p className="text-red-500">
                        Incorrect: {incorrectCount}
                      </p>
                      <p className="text-gray-500">
                        Skipped:{" "}
                        {questions.length - (correctCount + incorrectCount)}
                      </p>
                    </div>
                  </div>
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
                      {Math.round(
                        (currentQuestionIndex / (totalQuestions - 1)) * 100
                      )}
                      % ({currentQuestionIndex + 1}/{totalQuestions})
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
                    className="w-[20rem]"
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
                    <Textarea className="w-96" />
                  </>
                ) : (
                  <>
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
                <>
                  {aboutyourself ? (
                    <Button
                      variant="default"
                      className="bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9"
                      disabled={true}
                    >
                      Check
                    </Button>
                  ) : (
                    <Button
                      onClick={handleCheckAnswer}
                      variant="default"
                      className="bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 rounded-xl hover:rounded-sm font-bold transition-all duration-300 px-9"
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
      )}
    </>
  );
};
