import React, { useState } from "react";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";
import { useRouter } from "next/navigation";

interface SubmitButtonProps {
  questionId: string;
  isSubmitted: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted }) => {
  const router = useRouter();

  async function handleCommentSave() {
    const refresh = router.refresh;

    refresh();
    try {
      const response = await fetch(
        `${StaticData.SiteURL}/api/questionsubmitapi`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "clux1ne450001hzc8vv4kgk20",
            email: "aimahusnain@gmail.com",
          }),
        }
      );

      const data = await response.json();

      if (data && data.success) {
        console.log("Submission successful");

        window.location.reload();
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
    </div>
  );
};

export default SubmitButton;
