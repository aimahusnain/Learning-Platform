'use client'

import { QuestionsCarousel } from "@/components/QuestionsCarousel";
import React, { useEffect, useState } from "react";

const Questions = ({ params }: { params: any }) => {
  const { questionid } = params;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-full items-center justify-center flex text-2xl font-bold font-sans">Loading...</div>
      ) : (
        <QuestionsCarousel questionid={questionid} />
      )}
    </>
  );
};

export default Questions;
