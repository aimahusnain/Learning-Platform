"use client";

import React, { useState } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

export function QuestionsCarousel() {
  const [progress, setProgress] = useState(0);

  const handleIncrementProgress = () => {
    if (progress < 100) {
      setProgress((prevProgress) => prevProgress + 25);
    }
  };

  return (
    <div className="mx-20">
      {progress < 100 ? (
        <div className="h-screen py-14 flex flex-col items-center justify-between">
          <Progress value={progress} className="bg-slate-200" />
          <div>Question</div>
          <div className="flex w-full justify-between">
            <Button size="lg">Skip</Button>
            <Button
              size="lg"
              variant="success"
              onClick={handleIncrementProgress}
              disabled={progress === 100}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-center text-3xl font-bold">Finish!</p>
        </div>
      )}
    </div>
  );
}
