import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";

export async function submitQuestion() {
  const { data: session } = useSession();
  const res = await fetch(`${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}`);
  const data = await res.json();
  return data;
}