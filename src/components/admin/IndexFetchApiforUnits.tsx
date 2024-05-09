import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { StaticData } from "@/lib/staticdata";

interface Unit {
  id: number;
  name: string;
  noidnumber: number;
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
  // const [filteredUnits, setFilteredUnits] = useState<Unit[]>([]);
  // const [name, setName] = useState("");
  // const [noidnumber, setNoidNumber] = useState<number | string>("");


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${StaticData.SiteURL}/api/units/unitwithIndex?startIndex=${first - 1}&endIndex=${
  //           last - 1
  //         }`
  //       );
  //       const data = await response.json();
  //       setFilteredUnits(data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [first, last]);

  // async function handleCommentSave(id: number) {
  //   try {
  //     const response = await fetch(`/api/admin/Unit/Update`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: id,
  //         name: name,
  //         noidnumber: noidnumber,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data && data.success) {
  //       const updatedUnits = filteredUnits.map((unit) => {
  //         if (unit.id === id) {
  //           return { ...unit, name: name };
  //         }
  //         return unit;
  //       });
  //       setFilteredUnits(updatedUnits);
  //     } else {
  //       console.error("Failed to update the unit's name.");
  //     }
  //   } catch (error) {
  //     console.error("Error while updating unit's name:", error);
  //   }
  // }

  return (
  //  <div className="w-full">
  //     <ToggleGroup type="single">
  //       <ToggleGroupItem
  //         value="list"
  //         aria-label="Toggle List"
  //         onClick={toggleLayout}
  //       >
  //         <List />
  //       </ToggleGroupItem>
  //       <ToggleGroupItem
  //         value="grid"
  //         aria-label="Toggle Grid"
  //         onClick={toggleLayout}
  //       >
  //         <LayoutGrid />
  //       </ToggleGroupItem>
  //     </ToggleGroup>
  //     <div
  //       className={
  //         isGrid
  //           ? "flex flex-wrap gap-2 justify-between w-full"
  //           : "flex flex-col items-center gap-4"
  //       }
  //     >
  //       {filteredUnits.map((unit) => (
  //         <div key={unit.id}>
  //           {isGrid ? (
  //             <Card className="w-[289px]">
  //               <CardHeader>
  //                 <Link href={`/learn/${unit.id}`}>
  //                   <CardTitle className="capitalize">
  //                     Unit {unit.noidnumber}
  //                   </CardTitle>
  //                 </Link>
  //                 <CardDescription className="text-xl">
  //                   {unit.name}
  //                 </CardDescription>
  //               </CardHeader>
  //               <CardContent>
  //                 <form>
  //                   <div className="grid w-full items-center gap-4">
  //                     <div className="flex flex-col space-y-1.5">
  //                       How many Questions are in this Unit?
  //                     </div>
  //                     <div className="flex flex-col space-y-1.5">
  //                       {unit.description}
  //                     </div>
  //                   </div>
  //                 </form>
  //               </CardContent>
  //               <CardFooter className="flex justify-between">
  //                 <Button variant="outline" className="cursor-default">
  //                   Not Completed
  //                 </Button>
  //                 <Link href={`/learn/${unit.id}`}>
  //                   <Button variant="success">Learn</Button>
  //                 </Link>
  //               </CardFooter>
  //             </Card>
  //           ) : (
  //             <div className="w-[40rem] justify-between flex items-center border border-zinc-800 p-4">
  //               <Link
  //                 className="text-xl font-bold capitalize"
  //                 href={`/learn/${unit.id}`}
  //               >
  //                 <span className="text-md font-light">
  //                   Unit {unit.noidnumber}.
  //                 </span>{" "}
  //                 {unit.name}
  //               </Link>
  //               <div className="flex gap-5">
  //                 <Drawer>
  //                   <DrawerTrigger asChild>
  //                     <Button variant="ghost" className="max-w-max">
  //                       Edit
  //                     </Button>
  //                     {/* <Button variant="outline">Open Drawer</Button> */}
  //                   </DrawerTrigger>
  //                   <DrawerContent>
  //                     <div className="mx-auto w-full max-w-sm">
  //                       <DrawerHeader>
  //                         <DrawerTitle>Edit Unit</DrawerTitle>
  //                         <DrawerDescription>
  //                           Change Details of Unit
  //                         </DrawerDescription>
  //                       </DrawerHeader>
  //                       <div className="space-y-4 flex flex-col p-4 pb-3">
  //                         <div className="space-y-2">
  //                           <label>Name</label>
  //                           <Input
  //                             id={`unitName_${unit.id}`}
  //                             placeholder="Name of Unit"
  //                             value={name}
  //                             onChange={(e) => setName(e.target.value)}
  //                           />{" "}
  //                         </div>
  //                         <div className="space-y-2">
  //                           <label>No of Unit</label>
  //                           <Input
  //                             id={`unitNoid_${unit.id}`}
  //                             placeholder="Number"
  //                             value={noidnumber.toString()}
  //                             onChange={(e) =>
  //                               setNoidNumber(parseInt(e.target.value, 10))
  //                             }
  //                           />{" "}
  //                         </div>
  //                       </div>
  //                       <DrawerFooter>
  //                         <DrawerClose asChild>
  //                           <Button onClick={() => handleCommentSave(unit.id)}>
  //                             Submit
  //                           </Button>
  //                         </DrawerClose>
  //                         <DrawerClose asChild>
  //                           <Button variant="outline">Cancel</Button>
  //                         </DrawerClose>
  //                       </DrawerFooter>
  //                     </div>
  //                   </DrawerContent>
  //                 </Drawer>
                  
  //                 <Link href={`/learn/${unit.id}`}>
  //                   <Button variant="secondary">Learn</Button>
  //                 </Link>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div> 
  <div>
    sdf
  </div>
  );
};

export default IndexFetchApiforUnits;
