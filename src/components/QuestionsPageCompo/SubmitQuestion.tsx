// submitQuestion.js
import { StaticData } from "@/lib/staticdata";

export async function submitQuestion() {
  const res = await fetch(`${StaticData.SiteURL}/api/getquestions`);
  const data = await res.json();
  return data;
}
