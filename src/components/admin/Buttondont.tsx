'use client'

import React from "react";
import { Button } from "../ui/button";
import { StaticData } from "@/lib/staticdata";


const Buttondont = ({ Datay }: { Datay: any }) => {
    
    
    async function deleteQuestion() {
        try {
            const response = await fetch(
                `${StaticData.SiteURL}/api/admin/Questions/delete`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: String(Datay.name),
                    }),
                }
            );
            console.log(Datay.id);

      const data = await response.json();

      if (data && data.success) {
        console.log("Submission successful");
        // window.location.reload();
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
    } finally {
      console.log("finally");
    }
  }
  return (
    <Button variant="destructive" onClick={deleteQuestion}>
      Delete
    </Button>
  );
};

export default Buttondont;
