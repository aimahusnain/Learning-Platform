// Units.tsx
import React from "react";
import Questionsadd from "@/components/admin/questionsadd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StaticData } from "@/lib/staticdata";
import Buttondont from "@/components/admin/Buttondont"; // Import Buttondont component

async function SearchedQuestions() {
  const res = await fetch(`${StaticData.SiteURL}/api/admin/Questions/get`);
  const data = await res.json();

  if (data.success) return data.data;
}

const Units = async () => {
  const Questions = await SearchedQuestions();

  return (
    <div className="flex flex-col items-center justify-start">
      <Questionsadd />

      <div className="p-4 w-full mb-20 mt-12 flex flex-wrap gap-4 justify-between">
        {Questions ? (
          Questions.map((data: any, index: any) => (
            <Card key={index} className="w-[350px] h-fit">
              <CardHeader>
                <CardTitle>
                  <span className="text-xl font-light">{index + 1}</span>.{" "}
                  {data.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                    <Buttondont Datay={data} />
              </CardContent>
            </Card>
          ))
        ) : (
          <div>No Questions found</div>
        )}
      </div>



      
    </div>
  );
};

export default Units;
