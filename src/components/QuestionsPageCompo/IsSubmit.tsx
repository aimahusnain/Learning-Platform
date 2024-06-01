"use client";

import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import SubmitButton from "./Submit Button";

interface Props {
  county: any;
  questionid: string
}

const IsSubmit: React.FC<Props> = ({ county, questionid }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { data: session } = useSession();

  console.log("Isubmit", questionid);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}&id=${questionid}`
        );

        const data = await response.json();

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
