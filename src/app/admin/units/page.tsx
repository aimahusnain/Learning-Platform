'use client'

import { Button } from "@/components/ui/button";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
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

const Units = () => {
  const [getAllList, setAllList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="p-4 mx-24">
      {isLoading && <p>Loading...</p>}
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
        ))}
    </div>
  );
};

export default Units;
