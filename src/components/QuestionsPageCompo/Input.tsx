// import React, { useEffect, useState } from "react";
// import { Input } from "../ui/input";
// import { StaticData } from "@/lib/staticdata";
// import axios from "axios";
// import { Button } from "../ui/button";

// const QuestionsPageInput = ({
//   userAnswers,
//   userAnswers2,
//   currentQuestionIndex,
//   handleInputChange,
//   handleInput2Change,
//   mainQuestionId,
//   userprogressmainquestionid,
//   userEmail,
//   questions,
//   feedback,
// }: any) => {
//   const [questionData, setQuestionData] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [editedAnswer, setEditedAnswer] = useState("");
//   const [editedAnswer2, setEditedAnswer2] = useState("");

//   useEffect(() => {
//     const fetchQuestion = async () => {
//       try {
//         setLoading(true);
//         setError(false);

//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/UserAnswerSaver?email=${userEmail}&mainQuestionsId=${mainQuestionId}`
//         );
//         const data = response.data;

//         if (data.success) {
//           setQuestionData(data.data);
//           setEditedAnswer(data.data.userAnswer || "");
//           setEditedAnswer2(data.data.userAnswer2 || "");
//         } else {
//           setError(true);
//         }
//       } catch (error) {
//         console.error("Error fetching question:", error);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestion();
//   }, [mainQuestionId, userEmail]);

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = async () => {
//     try {
//       // Replace this with your actual API endpoint
//       const response = await axios.put(`${StaticData.SiteURL}/api/savequestionedit`, {
//         id: userprogressmainquestionid.data[0].id,
//         email: userEmail,
//         userAnswer: editedAnswer,
//         userAnswer2: questionData.userAnswer2 === null ? null : editedAnswer2,
//       });

//       if (response.data.success) {
//         setQuestionData({
//           ...questionData,
//           userAnswer: editedAnswer,
//           userAnswer2: editedAnswer2,
//         });
//         setEditMode(false);
//       } else {
//         console.error("Failed to save answer:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error saving answer:", error);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error || !questionData?.userAnswer) {
//     return (
//       <>
//         <div className="flex h-fit gap-2">
//           <Input
//             type="text"
//             placeholder="Type your answer..."
//             value={userAnswers[currentQuestionIndex]}
//             onChange={handleInputChange}
//           />
//           <p
//             className={`${
//               feedback[currentQuestionIndex] === "Correct!"
//                 ? "text-green-500"
//                 : feedback[currentQuestionIndex] === "Incorrect!"
//                 ? "text-red-500"
//                 : "text-black"
//             } font-bold text-xl mt-1 w-fit`}
//           >
//             {feedback[currentQuestionIndex]}
//           </p>
//         </div>
//         {userAnswers2[currentQuestionIndex] !== null &&
//           userAnswers2[currentQuestionIndex] !== undefined && (
//             <div>
//               <h1 className="text-xl font-bold mt-6">
//                 {questions[currentQuestionIndex]?.answer2Question}
//               </h1>

//               <div className="flex h-fit gap-2">
//                 <Input
//                   type="text"
//                   placeholder="Type your answer..."
//                   value={userAnswers2[currentQuestionIndex]}
//                   onChange={handleInput2Change}
//                 />
//                 <p
//                   className={`${
//                     feedback[currentQuestionIndex + questions.length] ===
//                     "Correct!"
//                       ? "text-green-500"
//                       : feedback[currentQuestionIndex + questions.length] ===
//                         "Incorrect!"
//                       ? "text-red-500"
//                       : "text-black"
//                   } font-bold text-xl mt-1 w-fit`}
//                 >
//                   {feedback[currentQuestionIndex + questions.length]}
//                 </p>
//               </div>
//             </div>
//           )}
//       </>
//     );
//   }

//   return (
//     <>
//       <div className="flex h-fit gap-2">
//         <Input
//           type="text"
//           placeholder="Type your answer..."
//           value={editMode ? editedAnswer : questionData.userAnswer}
//           onChange={(e) => setEditedAnswer(e.target.value)}
//           readOnly={!editMode}
//         />
//         <p
//           className={`${
//             questionData.correct === true
//               ? "text-green-500"
//               : questionData.correct === false
//               ? "text-red-500"
//               : "text-black"
//           } font-bold text-xl mt-1 w-fit`}
//         >
//           {questionData.correct ? "Correct!" : "Incorrect!"}
//         </p>
//       </div>
//       {questionData.userAnswer2 !== null &&
//         questionData.userAnswer2 !== undefined && (
//           <div>
//             <h1 className="text-xl font-bold mt-6">
//               {questions[currentQuestionIndex]?.answer2Question}
//             </h1>

//             <div className="flex h-fit gap-2">
//               <Input
//                 type="text"
//                 placeholder="Type your answer..."
//                 value={editMode ? editedAnswer2 : questionData.userAnswer2}
//                 onChange={(e) => setEditedAnswer2(e.target.value)}
//                 readOnly={!editMode}
//               />
//               <p
//                 className={`${
//                   questionData.correct2 === true
//                     ? "text-green-500"
//                     : questionData.correct2 === false
//                     ? "text-red-500"
//                     : "text-black"
//                 } font-bold text-xl mt-1 w-fit`}
//               >
//                 {questionData.correct2 ? "Correct!" : "Incorrect!"}
//               </p>
//             </div>
//           </div>
//         )}
//       {editMode ? (
//         <Button onClick={handleSave} className="mt-4">Save Answer</Button>
//       ) : (
//         <Button onClick={() => setEditMode(true)} className="mt-4">Edit Answer</Button>
//       )}
//     </>
//   );
// };

// export default QuestionsPageInput;

import { Input } from "../ui/input";

const QuestionsPageInput = ({
  userAnswers,
  userAnswers2,
  currentQuestionIndex,
  handleInputChange,
  handleInput2Change,
  mainQuestionId,
  userEmail,
  questionData,
  questions,
  handleLocalInputChange,
}: any) => {
  const currentQuestion = questions[currentQuestionIndex];
  const hasSecondField = currentQuestion?.answer2Question || currentQuestion?.whatquestionOption2;

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex h-fit gap-2">
          <Input
            type="text"
            placeholder="Type your answer..."
            value={questionData.userAnswer}
            onChange={(e) => handleLocalInputChange(e, 'userAnswer')}
          />
          <p className={`font-bold text-xl mt-1 w-fit ${
            questionData.correct === true
              ? "text-green-500"
              : questionData.correct === false
              ? "text-red-500"
              : "text-black"
          }`}>
            {questionData.correct === true
              ? "Correct!"
              : questionData.correct === false
              ? "Incorrect!"
              : ""}
          </p>
        </div>
        {hasSecondField && (
          <div className="flex h-fit gap-2">
            <Input
              type="text"
              placeholder="Type your second answer..."
              value={questionData.userAnswer2}
              onChange={(e) => handleLocalInputChange(e, 'userAnswer2')}
            />
            <p className={`font-bold text-xl mt-1 w-fit ${
              questionData.correct2 === true
                ? "text-green-500"
                : questionData.correct2 === false
                ? "text-red-500"
                : "text-black"
            }`}>
              {questionData.correct2 === true
                ? "Correct!"
                : questionData.correct2 === false
                ? "Incorrect!"
                : ""}
            </p>
          </div>
        )}
      </div>
      {/* <Button onClick={saveAnswer} className="mt-4">
        Check
      </Button> */}
    </>
  );
};

export default QuestionsPageInput;