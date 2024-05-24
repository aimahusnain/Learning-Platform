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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          `${StaticData.SiteURL}/api/UserAnswerSaver?email=${userEmail}&mainQuestionsId=${mainQuestionId}`
        );
        const data = response.data;

        if (data.success) {
          setQuestionData(data.data);
        } else {
          console.error("Failed to fetch question:", data.message);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [mainQuestionId, userEmail]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !questionData?.userAnswer) {
    return (
      <Input
        type="text"
        placeholder="Type your answer..."
        value={userAnswers[currentQuestionIndex]}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <Input
      type="text"
      placeholder="Type your answer..."
      value={questionData.userAnswer}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

export default QuestionsPageInput;
