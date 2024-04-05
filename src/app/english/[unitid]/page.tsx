"use client";

import { QuestionsCarousel } from "@/components/QuestionsCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";

const UnitDetails = () => {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Check if the answer is correct (You can implement your logic here)
    const correctAnswer = "is"; // Example correct answer
    setIsCorrect(answer.toLowerCase() === correctAnswer.toLowerCase());
  };

  const Questions = [
    {
      id: 1,
      Name: "Write the short form (she's / we aren't etc.).",
      Number: "Unit 1",
    },
    { id: 2, Name: "Write am, is or are.", Number: "Unit 2" },
    { id: 3, Name: "Complete the sentences.", Number: "Unit 3" },
    {
      id: 4,
      Name: "Look at Lisa's sentences in 1 A. Now write sentences about yourself.",
      Number: "Unit 4",
    },
    { id: 5, Name: "Write sentences for the pictures. Use:", Number: "Unit 5" },
    {
      id: 6,
      Name: "Write true sentences, positive or negative. Use is/isn't or are/aren't",
      Number: "Unit 6",
    },
    {
      id: 7,
      Name: "Write true sentences, positive or negative. Use I'm / I'm not",
      Number: "Unit 7",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Questions &&
          Questions.map((unit: any) => (
            <Card className="w-[350px]">
              <CardHeader>
                <Link href={`/english/${unit.id}`}>
                  <CardTitle className="capitalize">{unit.Name}</CardTitle>
                </Link>
                <CardDescription>Unit {unit.noidnumber}</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      Show How many Questions are?
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      {unit.description}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="cursor-default">
                  Not Completed
                </Button>
                <Link href={`/english/${unit.id}`}>
                  <Button variant="success">Learn</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default UnitDetails;
