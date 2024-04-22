import React, { useState } from "react";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface SubmitButtonProps {
  questionid: string
}

const SubmitButton: React.FC<SubmitButtonProps> = (questionid) => {
  const router = useRouter();
  const { data: session } = useSession();

  async function unquestionsubmitapi() {
    const refresh = router.refresh;
    toast("ReTaked!");

    refresh();
    try {
      const response = await fetch(
        `${StaticData.SiteURL}/api/unquestionsubmitapi`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: questionid.questionid,
            email: session?.user?.email,
          }),
        }
      );

      const data = await response.json();

      if (data && data.success) {
        console.log("Submission successful");
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  }

  async function deleteuserProgressMainQuestion() {
    try {
      const response = await fetch(
        `${StaticData.SiteURL}/api/deleteUserProgressMainQuestion?email=${session?.user?.email}&questionId=${questionid.questionid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data && data.success) {
        console.log("Delete successful");
      } else {
        console.error("Deletion failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  }

  async function handleCommentSave() {
    deleteuserProgressMainQuestion();
    unquestionsubmitapi()
  }

  return (
    <div>
      <Button variant="success" onClick={handleCommentSave}>
        Retake
      </Button>
    </div>
  );
};

export default SubmitButton;
