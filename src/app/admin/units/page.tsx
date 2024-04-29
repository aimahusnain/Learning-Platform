"use client"

import IndexFetchApiforUnits from "@/components/admin/IndexFetchApiforUnits";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Units = () => {
  const [isGrid, setIsGrid] = useState(false);

  const toggleLayout = () => {
    setIsGrid((prevState) => !prevState);
  };

  const UnitsArangedData = [
    { title: "Present", firstNumber: 1, lastNumber: 9, link: "/present" },
    { title: "Past", firstNumber: 10, lastNumber: 14, link: "/present" },
    { title: "Present perfect", firstNumber: 15, lastNumber: 20, link: "/present" },
    { title: "Passive", firstNumber: 21, lastNumber: 22, link: "/present" },
    { title: "Verb forms", firstNumber: 23, lastNumber: 24, link: "/present" },
    { title: "Future", firstNumber: 25, lastNumber: 28, link: "/present" },
    {
      title: "Modals, imperative etc",
      firstNumber: 29, lastNumber: 36,
      link: "/present",
    },
    { title: "There and it", firstNumber: 37, lastNumber: 39, link: "/present" },
    { title: "Auxiliary verbs", firstNumber: 40, lastNumber: 43, link: "/present" },
    { title: "Questions", firstNumber: 44, lastNumber: 49, link: "/present" },
    { title: "Reported speech", firstNumber: 50, lastNumber: 50, link: "/present" },
    { title: "-mg and to ...", firstNumber: 51, lastNumber: 54, link: "/present" },
    {
      title: "Go, get, do, make and have",
      firstNumber: 55, lastNumber: 58,
      link: "/present",
    },
    {
      title: "Pronouns and possessives",
      firstNumber: 59, lastNumber: 64,
      link: "/present",
    },
    { title: "A and The", firstNumber: 65, lastNumber: 73, link: "/present" },
    {
      title: "Determiners and pronouns",
      firstNumber: 74, lastNumber: 84,
      link: "/present",
    },
    {
      title: "Adjectives and adverbs",
      firstNumber: 85, lastNumber: 92,
      link: "/present",
    },
    { title: "Word order", firstNumber: 93, lastNumber: 96, link: "/present" },
    {
      title: "Conjunctions and clauses",
      firstNumber: 97, lastNumber: 102,
      link: "/present",
    },
    { title: "Prepositions", firstNumber: 103, lastNumber: 113, link: "/present" },
    { title: "Phrasal verbs", firstNumber: 114, lastNumber: 115, link: "/present" },
  ];
  
  return (
    <div className="p-4 w-full mb-20 mt-12 flex flex-wrap gap-4 justify-between">
      {UnitsArangedData.map((data, index) => (
        <Card key={index} className="w-[350px] h-fit">
          <CardHeader>
            <CardTitle>
              <span className="text-xl font-light">{index + 1}</span>.{" "}
              {data.title} ({data.firstNumber}-{data.lastNumber}) Units
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger>
                <Button variant="secondary">Look</Button>
              </DialogTrigger>
              <DialogContent className="max-w-full max-h-screen overflow-y-scroll">
                <DialogHeader>
                  <DialogTitle>Units</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="w-full flex flex-wrap">

          <IndexFetchApiforUnits
            toggleLayout={toggleLayout}
            isGrid={isGrid}
            first={data.firstNumber}
            last={data.lastNumber}
            />
            </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
      {/* {isLoading && <p>Loading...</p>}
      {!isLoading && getAllList.length === 0 && <p>No units found.</p>}
      {!isLoading &&
        getAllList.map((unit) => (
          <div
            key={unit.id}
            className="border border-gray-200 rounded-md p-4 mb-4"
          >
            <Link
              className="text-xl font-bold capitalize mb-2 block"
              href={`/learn/${unit.id}`}
            >
                Unit {unit.noidnumber}: {unit.name}
            </Link>
            <div className="flex justify-between items-center">
              <Button variant="outline" className="max-w-max">
                Not Completed
              </Button>
              <Link href={`/learn/${unit.id}`}>
                <Button variant="success">Learn</Button>
              </Link>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default Units;
