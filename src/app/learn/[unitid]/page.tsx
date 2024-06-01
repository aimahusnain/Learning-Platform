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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

async function SearchedUnit(id: string) {
  const res = await fetch(`${StaticData.SiteURL}/api/units/unitopen?id=${id}`);

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
        {UnitDetailsData[0].name} <span className="font-normal">Questions</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <Dialog>
                    <DialogTrigger>
              <Card key="explanation-video" className="w-[350px] shadow-xl">
                <CardHeader>
                    <CardTitle className="capitalize w-full text-left">
                      Explanatory Video
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex w-full justify-between">
                    <div></div>
                    <Button>Watch</Button>
                </CardFooter>
              </Card>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Explanation Video</DialogTitle>
                        <DialogDescription>
                          This Video Will Explain you very easily the{" "}
                          {UnitDetailsData[0].name}.
                        </DialogDescription>
                      </DialogHeader>
                      {UnitDetailsData[0].videoReferenceVideo ? (
                        <iframe
                          className="w-full"
                          height="315"
                          src={UnitDetailsData[0].videoReferenceVideo}
                          title="YouTub1e video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (
                        <p>Video Not Founded ):</p>
                      )}
                    </DialogContent>
                  </Dialog>
        {Questions && Array.isArray(Questions) ? (
          Questions.map((question: any) => {
            return (
              <Card key={question.id} className="w-[350px] shadow-xl">
                <CardHeader>
                  <Link href={`/learn/${unitid}/questions/${question.id}`}>
                    <CardTitle className="capitalize">
                      {question.name}
                    </CardTitle>
                  </Link>
                  <CardDescription>
                    {question.MainQuestions &&
                      `${question.MainQuestions.length} Questions`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                 
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="cursor-default">
                    {question.submitted === true
                      ? "Submitted"
                      : "Not Submitted"}
                  </Button>
                  <Link href={`/learn/${unitid}/questions/${question.id}`}>
                    <Button >Learn</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <p>No questions found</p>
        )}
      </div>
    </div>
  );
};

export default UnitDetails;
