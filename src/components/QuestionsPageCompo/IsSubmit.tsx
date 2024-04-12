// "use client";

// import React, { useEffect, useState } from "react";
// import { submitQuestion } from "./SubmitQuestion";
// import SubmitButton from "./Submit Button";

// const IsSubmit = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await submitQuestion();
//         setIsSubmitted(
//           data.success && data.data.length > 0 && data.data[0].Submitted
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <SubmitButton
//       questionId="cluok50v30000oa6trymosjad"
//       isSubmitted={isSubmitted}
//     />
//   );
// };

// export default IsSubmit;


import { StaticData } from "@/lib/staticdata";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

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

export default SubmitButton;