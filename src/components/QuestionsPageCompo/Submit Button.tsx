import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  questionId: string;
  isSubmitted: boolean;
  count: number;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted, count }) => {
  const router = useRouter();
  const { data: session } = useSession();

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
            email: session?.user?.email,
            count: count,
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
