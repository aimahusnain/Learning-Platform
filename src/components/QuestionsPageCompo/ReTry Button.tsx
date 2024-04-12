import React, { useState } from "react";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";

interface SubmitButtonProps {
  questionId: string;
  isSubmitted: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted }) => {
  const [submittedMessage, setSubmittedMessage] = useState<string>("");

  async function handleCommentSave() {
    try {
      const response = await fetch(`${StaticData.SiteURL}/api/submitquestion`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "cluok50v30000oa6trymosjad",
        }),
      });

      const data = await response.json();

      if (data && data.success) {
        console.log("Submission successful");
        setSubmittedMessage("Thanks!");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  }

  return (
    <div>
      <Button onClick={handleCommentSave} disabled={isSubmitted}>
        Submit Question
      </Button>
      {submittedMessage && <p>{submittedMessage}</p>}{" "}
    </div>
  );
};

export default SubmitButton;
