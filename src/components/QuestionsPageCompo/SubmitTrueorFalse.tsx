import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { UserEmail } from "./email";

interface Props {
  questionid: string;
  UserEmail: string;
}

const SubmitTrueorFalse: React.FC<Props> = ({ questionid, UserEmail }) => {
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/fetchUserProgressMainQuestion?email=${UserEmail}`
        );
        const data = response.data;
        const userProgress = data.data;

        const userAnswerData = userProgress.find(
          (item: any) => item.mainQuestionsId === questionid
        );

        if (userAnswerData) {
          setCorrect(userAnswerData.correct);
          setUserAnswer(userAnswerData.userAnswer);
        } else {
          setCorrect(null);
          setUserAnswer(null);
        }
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchUserProgress();
  }, [questionid]);

  return (
    <div>
      {userAnswer !== null ? (
        <Input type="text" placeholder="Your Answer" value={userAnswer} />
      ) : (
        <Input type="text" placeholder="Your Answer" value="" />
      )}

      {correct === true && (
        <p className="font-sans text-teal-400 font-bold text-xl my-4">
          Correct!
        </p>
      )}

      {userAnswer === "" && (
        <p className="font-sans text-yellow-600 font-bold text-xl my-4">Skipped</p>
      )}

      {correct === false && userAnswer !== "" && (
        <p className="font-sans text-red-500 font-bold text-xl my-4">
          Incorrect!
        </p>
      )}
    </div>
  );
};

export default SubmitTrueorFalse;
