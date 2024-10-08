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
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface SubmitButtonProps {
  questionId: string;
  isSubmitted: boolean;
  count: number;
  id: any;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitted,
  count,
  id,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  async function handleCommentSave() {
    setLoading(true);
    try {
      const refresh = router.refresh;
      refresh();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/questionsubmitapi`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            email: session?.user?.email,
            count: count,
          }),
        }
      );

      const data = await response.json();

      if (data && data.success) {
        console.log("Submission successful");
        // window.location.reload();
        toast("Submitted!");
      } else {
        toast("Submission failed!", {
          description: "Please Try Again Later",
          action: {
            label: "close",
            onClick: () => console.log("Sonner Closed"),
          },
        });
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      toast("Submission failed!", {
        description: "Please Try Again Later",
        action: {
          label: "close",
          onClick: () => console.log("Sonner Closed"),
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="hover:bg-green-500 hover:rounded-sm font-bold transition-all duration-400 rounded-lg"
            disabled={isSubmitted}
          >
            Submit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ready to submit?</DialogTitle>
            <DialogDescription>
              If you submit now, you won&apos;t be able to retake it, and the
              data will be washed!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              
              onClick={handleCommentSave}
              disabled={isSubmitted || loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SubmitButton;
