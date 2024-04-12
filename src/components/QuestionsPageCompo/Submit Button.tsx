// CombinedSubmitComponent.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StaticData } from "@/lib/staticdata";
import { Button } from "../ui/button";

const CombinedSubmitComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${StaticData.SiteURL}/api/isSubmitQuestion`);
        const data = await res.json();
        setIsSubmitted(
          data.success && data.data.length > 0 && data.data[0].Submitted
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function handleCommentSave() {
    const refresh = router.refresh;

    refresh();
    try {
      const response = await fetch(`${StaticData.SiteURL}/api/submitQuestion`, {
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

export default CombinedSubmitComponent;
