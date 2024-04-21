"use client";

import { MobileHeader } from "@/components/SideBar/mobile-header";
import { Sidebar } from "@/components/SideBar/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import { LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getAllListsByCategory() {
  try {
    const response = await axios.get(`${StaticData.SiteURL}/api/units`);
    const data = response.data;
    if (data.success) return data.data;
  } catch (error) {
    console.error("Error fetching unit data:", error);
  }
}

const English = () => {
  const [isGrid, setIsGrid] = useState(true); // State to track layout choice
  const [getAllList, setAllList] = useState<any[]>([]); // Explicitly set the type as any[]
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Function to toggle between grid and list layout
  const toggleLayout = () => {
    setIsGrid((prevState) => !prevState);
  };

  // Fetch unit data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true while fetching data
        const data = await getAllListsByCategory();
        setAllList(data);
      } catch (error) {
        console.error("Error fetching unit data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row">
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8 justify-between w-full">
          <h1 className="text-4xl font-bold text-center">
            English Course Units
          </h1>
          <div className="mt-4 flex justify-center">
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
          </div>
        </div>
        {isLoading ? (
          <div className="text-center flex items-center justify-center h-full w-full">
            Loading...
          </div>
        ) : (
          <div
            className={
              isGrid ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-3" : "flex flex-col gap-3"
            }
          >
            {getAllList &&
              getAllList.map((unit) => (
                <div key={unit.id}>
                  {isGrid ? (
                    <Card className="w-full">
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
                  ) : (
                    <div className="flex flex-col border border-gray-200 p-4 mb-4">
                      <Link href={`/learn/${unit.id}`}>
                        <span className="text-lg capitalize mb-2">
                          Unit {unit.noidnumber}: {unit.name}
                        </span>
                      </Link>
                      <p>{unit.description}</p>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" className="cursor-default">
                          Not Completed
                        </Button>
                        <Link href={`/learn/${unit.id}`}>
                          <Button variant="success">Learn</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default English;
