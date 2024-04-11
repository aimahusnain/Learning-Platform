// submitQuestion.js
import { StaticData } from "@/lib/staticdata";

export async function submitQuestion() {
  const res = await fetch(`http://${StaticData.SiteURL}/api/isSubmitQuestion`);
  const data = await res.json();
  return data;
}
