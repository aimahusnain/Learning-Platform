"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaticData } from "@/lib/staticdata";
import axios from "axios";
import React, { useEffect, useState } from "react";

async function getAllListsOfUnits() {
  try {
    const response = await axios.get(`${StaticData.SiteURL}/api/units`);
    const data = response.data;
    if (data.success) return data.data;
  } catch (error) {
    console.error("Error fetching unit data:", error);
  }
}

const All = () => {
  const [getAllList, setAllList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllListsOfUnits();
        setAllList(data);
      } catch (error) {
        console.error("Error fetching unit data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">All Units</h1>
      <div>
        {getAllList.map((unit: any) => (
          <div key={unit.id} className="my-3 border border-gray-600 p-3">
            <div className="border-b border-gray-600 mb-2">
              <span className="text-gray-400">Unit ID:</span>{" "}
              <span className="text-gray-300">{unit.id}</span>
            </div>
            <div className="border-b border-gray-600 mb-2">
              <span className="text-gray-400">{unit.noidnumber}:</span>{" "}
              <span className="text-gray-300">{unit.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
