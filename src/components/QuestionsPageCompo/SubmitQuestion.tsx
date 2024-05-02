import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";

export async function submitQuestion(id: any) {
    const { data: session } = useSession();

    console.log(`123 ${id.questionId}`);
    
  
  const res = await fetch(
    `${StaticData.SiteURL}/api/findquestions?email=${session?.user?.email}&id=${id}`
  );
  console.log(data);
  return data;
}

// TODO: Change the id from here for submit.