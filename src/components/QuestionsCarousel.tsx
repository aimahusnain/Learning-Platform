import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const questions = [
  {
    prompt: "Write the short form of 'She is'",
    answer:
      "she's",
  },
  {
    prompt: "Write the short form of 'They are'",
    answer:
      "she is (answer='she's')\nthey are (answer='they're')\nit is not (answer='it isn't')\nthat is (answer='that's')\nI am not (answer='I'm not')\nyou are not (answer='you aren't')",
  },
  // Add more question objects as needed
];

export default questions;

export function QuestionsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSubmit = () => {
    const currentIndex = current - 1;
    const newSubmittedAnswers = [...submittedAnswers];
    newSubmittedAnswers[currentIndex] = ""; // Clear the submitted answer for the current question
    setSubmittedAnswers(newSubmittedAnswers);
    api?.scrollTo(current);
  };

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full max-w-md mx-auto">
        <CarouselContent>
          {questions.map((question, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    Question {index + 1}
                  </span>
                  <p className="mt-4">{question.prompt}</p>
                  <textarea
                    className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    rows={4}
                    placeholder="Your answer..."
                    value={submittedAnswers[index] || ""}
                    onChange={(e) => {
                      const newSubmittedAnswers = [...submittedAnswers];
                      newSubmittedAnswers[index] = e.target.value;
                      setSubmittedAnswers(newSubmittedAnswers);
                    }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-md">
        <div className="text-center text-sm text-gray-500">
          Slide {current} of {count}
        </div>
        <button
          className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
