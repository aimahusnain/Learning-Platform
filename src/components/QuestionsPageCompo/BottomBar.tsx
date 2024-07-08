import React from "react";
import { Button } from "../ui/button";

const BottomBar = ({
  isSubmitted,
  currentQuestionIndex,
  handleForwardQuestionwithoutSaveMainQuestion,
  handlePreviousQuestion,
  handleForwardQuestion,
  setShowCorrectAnswer,
  aboutyourself,
  saveAnswer
}: any) => {
  return (
    <div>
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
                onClick={saveAnswer}
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
  );
};

export default BottomBar;
