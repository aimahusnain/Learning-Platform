import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface UserProgress {
  id: string;
  progress: number;
  submitted: boolean;
  userEmail: string;
}

const SubmittedMarks = () => {
  const { data: session } = useSession();


  const [fetchUserProgressData, setFetchUserProgressData] = useState<
    UserProgress[] | null
  >(null);

  useEffect(() => {
    const fetchUserProgressQuestion = async () => {
      try {
        const response = await fetch(
          `${StaticData.SiteURL}/api/fetchUserProgressQuestion?id=clux1ne450001hzc8vv4kgk20&userEmail=${session?.user?.email}`
        );
        const data = await response.json();
        if (data.success) {
          setFetchUserProgressData(data.data);
        } else {
          console.error("Failed to fetch user progress data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user progress data:", error);
      }
    };

    fetchUserProgressQuestion();
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      {fetchUserProgressData && fetchUserProgressData.length > 0 && (
        <div>{fetchUserProgressData[0].progress}/3</div>
      )}
    </div>
  );
};

export default SubmittedMarks;
