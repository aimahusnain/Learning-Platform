"use client";
// import React, { useEffect, useState } from "react";
// import { Input } from "../ui/input";
// import { StaticData } from "@/lib/staticdata";
// import axios from "axios";

// const QuestionsPageInput = ({
//   userAnswers,
//   currentQuestionIndex,
//   handleInputChange,
// }: any) => {
//   const [openedQuestion, setOpenedQuestion] = useState<any>(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `${StaticData.SiteURL}/api/UserAnswerSaver?email=aimahusnain@gmail.com&mainQuestionsId=clv823o0e0001oz3lps4fciy4`
//         );
//         const data = response.data;
//         if (data.success) {
//           // Find the user's answer for the current question
//           const userAnswer = data.data.find(
//             (item: any) =>
//               item.questionId === userAnswers[currentQuestionIndex].id
//           );
//           setOpenedQuestion(userAnswer);
//         } else {
//           console.error("Failed to fetch questions:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, [currentQuestionIndex, userAnswers]);

// console.log("Openedquestion", openedQuestion)
//     return (
//       <div>
//       {openedQuestion !== null ? (
//         <Input
//           type="text"
//           placeholder="Type your answer..."
//           value={openedQuestion.userAnswer || ""}
//           onChange={handleInputChange}
//         />
//       ) : (
//         <Input
//           type="text"
//           placeholder="Type your answer..."
//           value={userAnswers[currentQuestionIndex]}
//           onChange={handleInputChange}
//         />
//       )}
//     </div>
//   );
// };

// export default QuestionsPageInput;

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { StaticData } from "@/lib/staticdata";

const QuestionsPageInput = ({
  userAnswers,
  currentQuestionIndex,
  handleInputChange,
  userId,
}: any) => {
  const [openedQuestion, setopenedQuestion] = useState<any[]>([]);

    
  useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const response = await fetch(
            `${StaticData.SiteURL}/api/UserAnswerSaver`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                mainQuestionsId: userId,
                userEmail: "aimahusnain@gmail.com",
              }),
            }
          );

          const data = await response.json();
        
          if (data && data.success) {
            setopenedQuestion(data)
              console.log("Input successful");
          } else {
            console.error("Input failed");
          }
        } catch (error) {
          console.error("Error submitting question:", error);
        }
      
      };
      
      console.log("fetchQuestions", fetchQuestions);
      

    fetchQuestions();
  }, []);

  return (
    <div>
      <Input
        type="text"
        placeholder="Type your answer..."
        value={openedQuestion?.userAnswer}
        //   onChange={handleInputChange}
      />
    </div>
  );
};

export default QuestionsPageInput;
