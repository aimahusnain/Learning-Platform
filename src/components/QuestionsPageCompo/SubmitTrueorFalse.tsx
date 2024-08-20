import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface Props {
  questionid: string;
  UserEmail: string;
  mainQuestionId: string;
  userAnswers2: any;
  currentQuestionIndex: any;
  questions: any;
  handleInput2Change: any;
}

const SubmitTrueorFalse: React.FC<Props> = ({
  questionid,
  UserEmail,
  mainQuestionId,
  userAnswers2,
  currentQuestionIndex,
  questions,
  handleInput2Change,
}) => {
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/fetchUserProgressMainQuestion?email=${UserEmail}`
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

  const [questionData, setQuestionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/UserAnswerSaver?email=${UserEmail}&mainQuestionsId=${mainQuestionId}`
        );
        const data = response.data;

        if (data.success) {
          setQuestionData(data.data);
        } else {
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
  }, [mainQuestionId, UserEmail]);

  return (
    <div>
      {userAnswer !== null ? (
        <div className="flex items-center">
        <Input type="text" placeholder="Your Answer" value={userAnswer} />
        {correct === true && (
          <p className="font-sans text-teal-400 font-bold text-xl my-4">
          Correct!
        </p>
      )}

      {correct === false && userAnswer !== "" && (
        <p className="font-sans text-red-500 font-bold text-xl my-4">
          Incorrect!
        </p>
      )}
      </div>
      ) : (
        <Input type="text" placeholder="Your Answer" value="" />
      )}

      {userAnswers2[currentQuestionIndex]  !== null &&
        userAnswers2[currentQuestionIndex] !== undefined && (
          <div>
            <h1 className="text-xl font-bold mt-6">
              {questions[currentQuestionIndex]?.answer2Question}
            </h1>

            <div className="flex h-fit gap-2">
              <Input
                type="text"
                placeholder="Type your answer..."
                value={questionData?.userAnswer2}
                onChange={handleInput2Change}
              />
              <p
                className={`${
                  questionData?.correct2 === true
                    ? "text-green-500"
                    : questionData?.correct2 === false
                    ? "text-red-500"
                    : "text-black"
                } font-bold text-xl mt-1 w-fit`}
              >
                {questionData?.correct2 ? "Correct!" : "Incorrect!"}
              </p>
            </div>
          </div>
        )}

      
    </div>
  );
};

export default SubmitTrueorFalse;
