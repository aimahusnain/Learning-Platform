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
import axios from "axios";
import Link from "next/link";

async function getAllListsByCategory() {
  try {
    const response = await axios.get(`${StaticData.SiteURL}/api/units`);
    const data = response.data;
    if (data.success) return data.data;
  } catch (error) {
    console.error("Error fetching unit data:", error);
  }
}


const English = async () => {
  const getAllList = await getAllListsByCategory();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        English Course Units
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getAllList &&
          getAllList.map((unit: any) => (
            <Card key={unit.id} className="w-[350px]">
              <CardHeader>
                <Link href={`/learn/${unit.id}`}>
                  <CardTitle className="capitalize">{unit.name}</CardTitle>
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
                <Link href={`/learn/${unit.id}`}>
                  <Button variant="success">Learn</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default English;
