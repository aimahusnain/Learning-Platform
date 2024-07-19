import { Input } from "../ui/input";

const QuestionsPageInput = ({
  currentQuestionIndex,
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