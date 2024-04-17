import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { UserEmail } from "./email";

interface Props {
  questionid: string;
  UserEmail: string
}

const SubmitTrueorFalse: React.FC<Props> = ({ questionid, UserEmail }) => {
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>("");

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await axios.get(
          `${StaticData.SiteURL}/api/fetchUserProgressMainQuestion?email=${UserEmail}`
        );
        const data = response.data;
        const userProgress = data.data;

        const userAnswer = userProgress.find(
          (item: any) => item.mainQuestionsId === questionid
        );

        if (userAnswer) {
          setCorrect(userAnswer.correct);
          setUserAnswer(userAnswer.userAnswer);
        } else {
          setCorrect(null);
          setUserAnswer("");
        }
      } catch (error) {
        console.error("Error fetching user progress:", error);
      }
    };

    fetchUserProgress();
  }, [questionid]);

  return (
    <div>
      {correct === null ? (
        <Input type="text" placeholder="Your Answer" value="" />
      ) : (
        <Input type="text" placeholder="Your Answer" value={userAnswer} />
      )}

      {correct === true && (
        <p className="font-sans text-teal-400 font-bold text-xl my-4">
          Correct!
        </p>
      )}
      {correct === false && (
        <p className="font-sans text-red-500 font-bold text-xl my-4">
          Incorrect!
        </p>
      )}
      {correct === null && (
        <p className="font-sans text-black font-bold text-xl my-4">Skipped</p>
      )}
    </div>
  );
};

export default SubmitTrueorFalse;
