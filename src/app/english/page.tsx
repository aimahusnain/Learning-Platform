import React from "react";
import Link from "next/link";

async function getAllListsByCategory() {
  const res = await fetch(`/api/units`);

  const data = await res.json();

  if (data.success) return data.data;
}

const English = async () => {
  const units = [
    { id: 1, Name: "am/is/are", Number: "Unit 1" },
    { id: 2, Name: "I am doing", Number: "Unit 2" },
    { id: 3, Name: "are you doing?", Number: "Unit 3" },
    { id: 4, Name: "I do/work/like etc. ", Number: "Unit 4" },
    { id: 5, Name: "I don't...", Number: "Unit 5" },
    { id: 6, Name: "Do you ...?", Number: "Unit 6" },
    { id: 7, Name: "I am doing", Number: "Unit 7" },
    { id: 8, Name: "I have... and I've got...", Number: "Unit 8" },
  ];

  const getAllList = await getAllListsByCategory();
  console.log(getAllList);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">English Course</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getAllList.map((unit: any) => (
          <Link
            className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            href={`/english/${unit.id}`}
            key={unit.id}
          >
            <p className="text-xl font-bold mb-2">Unit {unit.noidnumber}</p>
            <p className="text-sm font-normal text-center">{unit.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default English;
