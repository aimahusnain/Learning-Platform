export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// TODO: Delete it

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();

    const updatequestion = await db.userProgressQuestion.update({
      where: {
        id: String(extractData.id),
        userEmail: String(extractData.email),
      },
      data: { progress: extractData.progress },
    });

    if (updatequestion) {
      return NextResponse.json({
        success: true,  
        data: updatequestion,
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
