export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const extractData = await req.json();

    const Question = await db.userProgressMainQuestion.update({
      where: {
        id: String(extractData.id),
        userEmail: String(extractData.email),
      },
      data: {
        userAnswer: extractData.userAnswer,
        userAnswer2: extractData.userAnswer2,
      },
    });

    if (Question) {
      return NextResponse.json({
        success: true,
        data: Question,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to search results of questions",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
