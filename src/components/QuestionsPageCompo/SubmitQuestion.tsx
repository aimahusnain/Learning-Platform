import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";

export async function submitQuestion() {
    const { data: session } = useSession();

  const res = await fetch(
    `${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}&id=clux1ne450001hzc8vv4kgk20`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

// TODO: Change the id from here for submit.