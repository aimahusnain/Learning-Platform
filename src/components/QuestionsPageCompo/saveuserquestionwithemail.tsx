import { StaticData } from "@/lib/staticdata";

export async function SaveMainQuestion(
  userAnswer2: string,
  mainQuestionsId: any,
  userAnswer: any,
    correct: boolean,
    correct2: boolean,
  userEmail: String,
  mainquestionId: String,
) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/saveuserquestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mainQuestionsId: mainQuestionsId,
        userAnswer: userAnswer,
        userAnswer2: userAnswer2,
        correct: correct,
        correct2: correct2,
        userEmail: userEmail,
        questionId: mainquestionId,
      }),
    });
    const data = await res.json();

    console.log(data, "data123");

    if (data && data.success) {
      console.log("Data POST Successfully!");
    } else {
      console.error("Failed to save main question:", data.message);
    }
  } catch (error) {
    console.error("Error saving main question:", error);
  }
}
