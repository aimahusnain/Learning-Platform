import React, { useState } from "react";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface SubmitButtonProps {
}

const SubmitButton: React.FC<SubmitButtonProps> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
  console.log(session?.user?.email)

  async function handleCommentSave() {
    const refresh = router.refresh;

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
            id: "clux1ne450001hzc8vv4kgk20",
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

  return (
    <div>
      <Button onClick={handleCommentSave}>
        Retake
      </Button>
    </div>
  );
};

export default SubmitButton;
