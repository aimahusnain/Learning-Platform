export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
            const extractData = await request.json();

   const getquestions = await db.userProgressQuestion.findMany({
     where: extractData.UserEmail,
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
