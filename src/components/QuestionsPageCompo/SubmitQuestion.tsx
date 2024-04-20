import { StaticData } from "@/lib/staticdata";

export async function submitQuestion() {
  const res = await fetch(
    `${StaticData.SiteURL}/api/findquestions?email=aimahusnain@gmail.com&id=clv4hje0c000010j2wx2sce2d`
  );
  console.log(
    `${StaticData.SiteURL}/api/findquestions?email=aimahusnain@gmail.com`
  );
  console.log(res);
  
  const data = await res.json();
  console.log(data);
  return data;
}