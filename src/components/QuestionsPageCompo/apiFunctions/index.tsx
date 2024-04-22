import axios from "axios";
import { StaticData } from "@/lib/staticdata";

export async function checkQuestionSubmission(id: any): Promise<boolean> {
  try {
    const response = await axios.get(
      `${StaticData.SiteURL}/api/checkSubmission?id=${id}`
    );
    const data = response.data;
    return data.success && data.data.length > 0 && data.data[0].submitted;
  } catch (error) {
    console.error("Error checking question submission:", error);
    return false;
  }
}
