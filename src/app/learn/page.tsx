"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import axios from "axios";
import { motion } from "framer-motion";
import { Book, LayoutGrid, List, XCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

async function getAllListsByCategory() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/units`);
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
        const sortedData = data.sort((a: any, b: any) => a.noidnumber - b.noidnumber);
        setAllList(sortedData);
      } catch (error) {
        console.error("Error fetching unit data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-500">Learn</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center mb-8 justify-between w-full">
          <h1 className="text-4xl font-bold text-indigo-900">
            English Course Units
            <span className="text-2xl font-medium text-indigo-600">
              ({getAllList?.length})
            </span>
          </h1>
          <ToggleGroup
            type="single"
            className="border border-indigo-200 rounded-md"
          >
            <ToggleGroupItem
              value="list"
              aria-label="Toggle List"
              onClick={toggleLayout}
              className={`p-2 ${!isGrid ? "bg-indigo-100" : ""}`}
            >
              <List className="w-5 h-5 text-indigo-600" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="grid"
              aria-label="Toggle Grid"
              onClick={toggleLayout}
              className={`p-2 ${isGrid ? "bg-indigo-100" : ""}`}
            >
              <LayoutGrid className="w-5 h-5 text-indigo-600" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <motion.div
            className={
              isGrid
                ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getAllList &&
              getAllList.map((unit) => (
                <motion.div
                  key={unit.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isGrid ? (
                    <Card className="w-full hover:shadow-lg transition-all duration-300 bg-white">
                      <CardHeader className="bg-indigo-50 rounded-t-lg">
                        <Link href={`/learn/${unit.id}`}>
                          <CardTitle className="text-2xl font-bold text-indigo-800 capitalize">
                            Unit {unit.noidnumber}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-xl text-indigo-600">
                          {unit.name}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="flex items-center text-gray-600 mb-4">
                          <Book className="w-5 h-5 mr-2" />
                          <span>{unit.description} Questions</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between bg-gray-50 rounded-b-lg">
                        <Button
                          variant="outline"
                          className="cursor-default flex items-center"
                        >
                          <XCircle className="w-4 h-4 mr-2 text-red-500" />
                          Not Completed
                        </Button>
                        <Link href={`/learn/${unit.id}`}>
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Start Learning
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ) : (
                    <div className="flex justify-between items-center bg-white rounded-lg shadow p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 rounded-full p-3 mr-4">
                          <Book className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <Link
                            className="text-xl font-bold text-indigo-800 capitalize hover:text-indigo-600"
                            href={`/learn/${unit.id}`}
                          >
                            Unit {unit.noidnumber}: {unit.name}
                          </Link>
                          <p className="text-gray-600 mt-1">
                            {unit.description} Questions
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <Button
                          variant="outline"
                          className="cursor-default flex items-center"
                        >
                          <XCircle className="w-4 h-4 mr-2 text-red-500" />
                          Not Completed
                        </Button>
                        <Link href={`/learn/${unit.id}`}>
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Start Learning
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isGrid ? (
                <Card className="w-full hover:shadow-lg transition-all duration-300 bg-white">
                  <CardHeader className="bg-indigo-50 rounded-t-lg">
                    <Link href={`/learn/nursery`}>
                      <CardTitle className="text-2xl font-bold text-indigo-800 capitalize">
                        Unit Nursery
                      </CardTitle>
                    </Link>
                    <CardDescription className="text-xl text-indigo-600">
                      Nursery
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center text-gray-600 mb-4">
                      <Book className="w-5 h-5 mr-2" />
                      <span>For Kids</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between bg-gray-50 rounded-b-lg">
                    <Button
                      variant="outline"
                      className="cursor-default flex items-center"
                    >
                      <XCircle className="w-4 h-4 mr-2 text-red-500" />
                      Not Completed
                    </Button>
                    <Link href={`/learn/nursery`}>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ) : (
                <div className="flex justify-between items-center bg-white rounded-lg shadow p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full p-3 mr-4">
                      <Book className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <Link
                        className="text-xl font-bold text-indigo-800 capitalize hover:text-indigo-600"
                        href={`/learn/nursery`}
                      >
                        Unit Kids: Nursery
                      </Link>
                      <p className="text-gray-600 mt-1">Nursery Questions</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button
                      variant="outline"
                      className="cursor-default flex items-center"
                    >
                      <XCircle className="w-4 h-4 mr-2 text-red-500" />
                      Not Completed
                    </Button>
                    <Link href={`/learn/nursery`}>
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Start Learning
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default English;
