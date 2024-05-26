import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";

const QuestionsPageInput = ({
  userAnswers,
  userAnswers2,
  currentQuestionIndex,
  handleInputChange,
  handleInput2Change,
  mainQuestionId,
  userEmail,
  questions,
  feedback,
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
      <>
        <div className="flex h-fit gap-2">
          <Input
            type="text"
            placeholder="Type your answer..."
            value={userAnswers[currentQuestionIndex]}
            onChange={handleInputChange}
          />
          <p
            className={`${
              feedback[currentQuestionIndex] === "Correct!"
                ? "text-green-500"
                : feedback[currentQuestionIndex] === "Incorrect!"
                ? "text-red-500"
                : "text-black"
            } font-bold text-xl mt-1 w-fit`}
          >
            {feedback[currentQuestionIndex]}
          </p>
        </div>
        {userAnswers2[currentQuestionIndex] !== null &&
          userAnswers2[currentQuestionIndex] !== undefined && (
            <div>
              <h1 className="text-xl font-bold mt-6">
                {questions[currentQuestionIndex]?.answer2Question}
              </h1>

              <div className="flex h-fit gap-2">
                <Input
                  type="text"
                  placeholder="Type your answer..."
                  value={userAnswers2[currentQuestionIndex]}
                  onChange={handleInput2Change}
                />
                <p
                  className={`${
                    feedback[currentQuestionIndex + questions.length] ===
                    "Correct!"
                      ? "text-green-500"
                      : feedback[currentQuestionIndex + questions.length] ===
                        "Incorrect!"
                      ? "text-red-500"
                      : "text-black"
                  } font-bold text-xl mt-1 w-fit`}
                >
                  {feedback[currentQuestionIndex + questions.length]}
                </p>
              </div>
            </div>
          )}
      </>
    );
  }

  return (
    <>
      <div className="flex h-fit gap-2">
        <Input
          type="text"
          placeholder="Type your answer..."
          value={questionData.userAnswer}
          onChange={handleInputChange}
        />
        <p
          className={`${
            questionData.correct === true
              ? "text-green-500"
              : questionData.correct === false
              ? "text-red-500"
              : "text-black"
          } font-bold text-xl mt-1 w-fit`}
        >
          {questionData.correct ? "Correct!" : "Incorrect!"}
        </p>
      </div>
      {userAnswers2[currentQuestionIndex] !== null &&
        userAnswers2[currentQuestionIndex] !== undefined && (
          <div>
            <h1 className="text-xl font-bold mt-6">
              {questions[currentQuestionIndex]?.answer2Question}
            </h1>

            <div className="flex h-fit gap-2">
              <Input
                type="text"
                placeholder="Type your answer..."
                value={questionData.userAnswer2}
                onChange={handleInput2Change}
              />
              <p
                className={`${
                  questionData.correct2 ===
                  true
                    ? "text-green-500"
                    : questionData.correct2 ===
                      false
                    ? "text-red-500"
                    : "text-black"
                } font-bold text-xl mt-1 w-fit`}
              >
                {questionData.correct2 ? "Correct!" : "Incorrect!"}
              </p>
            </div>
          </div>
        )}
    </>
  );
};

export default QuestionsPageInput;
