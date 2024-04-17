import { StaticData } from "@/lib/staticdata";

export async function SaveMainQuestion(
  mainQuestionsId: any,
  userAnswer: any,
    correct: boolean,
  userEmail: String,
  mainquestionId: String
) {
  try {
    const res = await fetch(`${StaticData.SiteURL}/api/saveuserquestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mainQuestionsId: mainQuestionsId,
        userAnswer: userAnswer,
        correct: correct,
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
