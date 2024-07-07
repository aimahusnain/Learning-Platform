export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("questionId");
    const userEmail = url.searchParams.get("userEmail");

    const Question = await db.userProgressMainQuestion.findMany({
      where: {
        mainQuestionsId: String(id),
        userEmail: String(userEmail),
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
