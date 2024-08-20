// Units.tsx
import Buttondont from "@/components/admin/Buttondont"; // Import Buttondont component
import Questionsadd from "@/components/admin/questionsadd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StaticData } from "@/lib/staticdata";

async function SearchedQuestions() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/Questions/get`);

    const data = await res.json();
    return data.success ? data.data : console.log("Not Found Please");
    ;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
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
