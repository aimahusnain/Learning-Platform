import { StaticData } from "@/lib/staticdata";
import React, { useEffect, useState } from "react";

interface UserProgress {
  id: string;
  progress: number;
  submitted: boolean;
  userEmail: string;
}

const Bar = () => {
  const [fetchUserProgressData, setFetchUserProgressData] = useState<
    UserProgress[] | null
  >(null);

  useEffect(() => {
    const fetchUserProgressQuestion = async () => {
      try {
        const response = await fetch(
          `${StaticData.SiteURL}/api/fetchUserProgressQuestion?id=clux1ne450001hzc8vv4kgk20&userEmail=aimahusnain@gmail.com`
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
        <div>Progress: {fetchUserProgressData[0].progress}</div>
      )}
    </div>
  );
};

export default Bar;
