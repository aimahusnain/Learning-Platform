import { StaticData } from "@/lib/staticdata";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface UserProgress {
  id: string;
  progress: number;
  submitted: boolean;
  userEmail: string;
}

const SubmittedMarks = ({
  totalLength,
  questionId,
}: {
  totalLength: number;
  questionId: string}) => {
  const { data: session } = useSession();

  const [fetchUserProgressData, setFetchUserProgressData] = useState<
    UserProgress[] | null
  >(null);

  useEffect(() => {
    const fetchUserProgressQuestion = async () => {
      if (!session || !session.user || !session.user.email) {
        console.error("User session or email is undefined");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/fetchUserProgressQuestion?id=${questionId}&userEmail=${session.user.email}`
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
  }, [session]);

  return (
    <div className="w-full flex items-center justify-center">
      {fetchUserProgressData && fetchUserProgressData.length > 0 && (
        <div>
          {fetchUserProgressData[0].progress}/{totalLength}
        </div>
      )}
    </div>
  );
};

export default SubmittedMarks;
