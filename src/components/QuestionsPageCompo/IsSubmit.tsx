"use client";

import React, { useEffect, useState } from "react";
import { submitQuestion } from "./SubmitQuestion";
import SubmitButton from "./Submit Button";

const IsSubmit = (county: any, questionid: any) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await submitQuestion();

        setIsSubmitted(
          data.success && data.data.length > 0 && data.data[0].Submitted
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SubmitButton
      id="clux1ne450001hzc8vv4kgk20"
      count={county}
      questionId={questionid}
      isSubmitted={isSubmitted}
    />
  );
};

export default IsSubmit;
