import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

interface Unit {
  id: number;
  name: string;
  noidnumber: string;
  description: string;
}

interface Props {
  toggleLayout: () => void;
  first: number;
  last: number;
  isGrid: boolean;
}

const IndexFetchApiforUnits: React.FC<Props> = ({
  toggleLayout,
  first,
  last,
  isGrid,
}) => {
  const [filteredUnits, setFilteredUnits] = useState<Unit[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the server-side function or API route
        const response = await fetch(
          `/api/units/unitwithIndex?startIndex=${first - 1}&endIndex=${
            last - 1
          }`
        );
        const data = await response.json();
        setFilteredUnits(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [first, last]);

  return (
    <div className="w-full">
      <ToggleGroup type="single">
        <ToggleGroupItem
          value="list"
          aria-label="Toggle List"
          onClick={toggleLayout}
        >
          <List />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="grid"
          aria-label="Toggle Grid"
          onClick={toggleLayout}
        >
          <LayoutGrid />
        </ToggleGroupItem>
      </ToggleGroup>
      <div
        className={
          isGrid
            ? "flex flex-wrap gap-2 justify-between w-full"
            : "flex flex-col items-center gap-4"
        }
      >
        {filteredUnits.map((unit) => (
          <div key={unit.id}>
            {isGrid ? (
              <Card className="w-[289px]">
                <CardHeader>
                  <Link href={`/learn/${unit.id}`}>
                    <CardTitle className="capitalize">
                      Unit {unit.noidnumber}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-xl">
                    {unit.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        How many Questions are in this Unit?
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
            ) : (
              <div className="w-[40rem] justify-between flex items-center border border-zinc-800 p-4">
                <Link
                  className="text-xl font-bold capitalize"
                  href={`/learn/${unit.id}`}
                >
                  <span className="text-md font-light">Unit {unit.noidnumber}.</span> {unit.name}
                </Link>
                <div className="flex gap-5">
                  <Button variant="ghost" className="max-w-max">
                    Edit
                  </Button>
                  <Link href={`/learn/${unit.id}`}>
                    <Button variant="secondary">Learn</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexFetchApiforUnits;
