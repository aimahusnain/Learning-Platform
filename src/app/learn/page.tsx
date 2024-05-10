"use client";

import { MobileSidebar } from "@/components/SideBar/mobile-sidebar";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
  const [isGrid, setIsGrid] = useState(true);
  const [getAllList, setAllList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleLayout = () => {
    setIsGrid((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getAllListsByCategory();
        setAllList(data);
      } catch (error) {
        console.error("Error fetching unit data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row">
      <MobileSidebar />
      <Sidebar className="hidden lg:flex" />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Learn</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center mb-8 justify-between w-full">
          <h1 className="text-4xl font-bold">
            English Course Units{" "}
            <span className="text-2xl font-medium">({getAllList?.length})</span>
          </h1>
          <div className="flex justify-center">
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
              isGrid
                ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
                : "flex flex-col gap-3"
            }
          >
            {getAllList &&
              getAllList.map((unit) => (
                <div key={unit.id}>
                  {isGrid ? (
                    <Card className="w-full hover:border-black transition-all duration-500">
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
                    <div className="flex justify-between items-center border border-gray-200 p-4 mb-4">
                      <Link
                        className="text-xl font-bold capitalize"
                        href={`/learn/${unit.id}`}
                      >
                        Unit {unit.noidnumber}: {unit.name}
                      </Link>
                      <div className="flex gap-5">
                        <Button
                          variant="outline"
                          className="cursor-default max-w-max"
                        >
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
