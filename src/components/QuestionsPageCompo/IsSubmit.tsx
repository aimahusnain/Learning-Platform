"use client";

import React, { useEffect, useState } from "react";
import SubmitButton from "./Submit Button";
import { submitQuestion } from "./SubmitQuestion";

interface Props {
  county: any;
  questionid: string
}

const IsSubmit: React.FC<Props> = ({ county, questionid }) => {
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
      id={questionid}
      count={county}
      questionId={questionid}
      isSubmitted={isSubmitted}
    />
  );
};

export default IsSubmit;
