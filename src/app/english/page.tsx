import React from "react";
import Link from "next/link";

// async function getAllListsByCategory() {
//   const res = await fetch(`http://localhost:3000/api/units`);

//   const data = await res.json();

//   if (data.success) return data.data;
// }

const English = async () => {
  // const getAllList = await getAllListsByCategory();
  // console.log(getAllList);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">English Course</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {getAllList &&
          getAllList.map((unit: any) => (
            <Link
              className="border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              href={`/english/${unit.id}`}
              key={unit.id}
            >
              <p className="text-xl font-bold mb-2">Unit {unit.noidnumber}</p>
              <p className="text-sm font-normal text-center">{unit.name}</p>
            </Link>
          ))} */}
      </div>
    </div>
  );
};

export default English;
