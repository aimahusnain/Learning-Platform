"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";

const QuestionsPageInput = ({
  userAnswers,
  currentQuestionIndex,
  handleInputChange,
  mainQuestionId,
  userEmail,
}: any) => {
  const [questionData, setQuestionData] = useState<any>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/UserAnswerSaver?email=${userEmail}&mainQuestionsId=${mainQuestionId}`
        );
        const data = response.data;
        console.log("Data: ", data);

        if (data.success) {
          setQuestionData(data.data);
        } else {
          console.error("Failed to fetch question:", data.message);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [mainQuestionId, userEmail]);

  return (
    <div>
      {questionData?.userAnswer ? (
        <Input
          type="text"
          placeholder="Type your answer..."
          value={questionData.userAnswer}
          onChange={(e) => handleInputChange(e)}
        />
      ) : (
            <Input
              type="text"
              placeholder="Type your answer..."
              value={userAnswers[currentQuestionIndex]}
              onChange={handleInputChange}
            />
      )}
      {/* {!questionData?.userAnswer &&
      <Input
      type="text"
      placeholder="Type your answer..."
      value=''
      onChange={(e) => handleInputChange(e)}
      />
    } */}
    </div>
  );
};

export default QuestionsPageInput;
