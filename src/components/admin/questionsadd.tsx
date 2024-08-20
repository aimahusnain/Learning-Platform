"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StaticData } from "@/lib/staticdata";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";


import axios from "axios";
import Link from "next/link";

async function getAllListsOfUnits() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/units`);
    const data = response.data;
    if (data.success) return data.data;
  } catch (error) {
    console.error("Error fetching unit data:", error);
  }
}

const QuestionsAdd = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Video, setVideo] = useState("");
  const [Unit, setUnit] = useState("");
  const [unitId, setUnitId] = useState("");
  const [getAllList, setAllList] = useState<any[]>([]);

  // Function to handle form submission
  const handleCommentSave = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/Questions/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            videoReferenceVideo: Video,
            unitId: unitId,
          }),
        }
      );

      const data = await response.json();

      if (data && data.success) {
        console.log("Question Post successful");
      } else {
        console.error("Question Post failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      // Reset the form after submission
      setName("");
      setDescription("");
      setVideo("");
      setUnitId("");
    }
  };

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add a Question</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Question</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              UnitId
            </Label>
            <Input
              id="name"
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="referencevideo" className="text-right">
              RV
            </Label>
            <Input
              id="referencevideo"
              value={Video}
              onChange={(e) => setVideo(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Link href={`/admin/units/all`}>
            <Button variant="secondary">Units List</Button>
          </Link>
          <Button onClick={handleCommentSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionsAdd;
