import { StaticData } from "@/lib/staticdata";

export async function submitQuestion() {
  const res = await fetch(`${StaticData.SiteURL}/api/findquestions?email=aimahusnain@gmail.com`);
  const data = await res.json();
  return data;
}