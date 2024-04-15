import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  questionId: string;
  isSubmitted: boolean;
  count: number;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitted, count }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  async function handleCommentSave() {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="success"
            disabled={isSubmitted}
          >
            Submit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ready to submit?</DialogTitle>
            <DialogDescription>
              If you submit now, you won't be able to retake it, and the data
              will be washed!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              variant="success"
              onClick={handleCommentSave}
              disabled={isSubmitted || loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmitButton;
