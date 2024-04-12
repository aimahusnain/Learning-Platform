
export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
   const getquestions = await db.question.findMany({
     include: { Unit: true },
   });

    if (getquestions.length > 0) {
      return NextResponse.json({
        success: true,
        data: getquestions,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No units found",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
