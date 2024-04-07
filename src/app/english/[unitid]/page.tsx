import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StaticData } from "@/lib/staticdata";
import Link from "next/link";

async function SearchedUnit(id: string) {
  const res = await fetch(
    `${StaticData.SiteURL}/api/units/openedunit?id=${id}`
  );

  const data = await res.json();

  if (data.success) return data.data;
}

async function SearchedQuestions(id: string) {
  const res = await fetch(`${StaticData.SiteURL}/api/questions?id=${id}`);
  const data = await res.json();

  if (data.success) return data.data;
}

const UnitDetails = async ({ params }: { params: any }) => {
  const { unitid } = params;

  const UnitDetailsData = await SearchedUnit(unitid);
  const Questions = await SearchedQuestions(unitid);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        {UnitDetailsData.name} Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Questions && Array.isArray(Questions) ? (
          Questions.map((question: any) => (
            <Card key={question.id} className="w-[350px] shadow-xl">
              <CardHeader>
                <Link href={`/english/${question.id}`}>
                  <CardTitle className="capitalize">{question.name}</CardTitle>
                </Link>
                <CardDescription>
                  {question.MainQuestions &&
                    `${question.MainQuestions.length} Questions`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      {question.description}
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="cursor-default">
                  Not Completed
                </Button>
                <Link href={`/english/${question.id}`}>
                  <Button variant="success">Learn</Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>No questions found</p>
        )}
      </div>
    </div>
  );
};

export default UnitDetails;
