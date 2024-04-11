// submitQuestion.js
import { StaticData } from "@/lib/staticdata";

export async function submitQuestion() {
  const res = await fetch(`https://${StaticData.SiteURL}/api/isSubmitQuestion`);
  const data = await res.json();
  return data;
}
