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
        <div>
          <Progress value={progress} className="" />
          <Button onClick={handleIncrementProgress} disabled={progress === 100}>
            Add 25%
          </Button>
        </div>
      ) : (
        <p>Finish</p>
      )}
    </div>
  );
}
