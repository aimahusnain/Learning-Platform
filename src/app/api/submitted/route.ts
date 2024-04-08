export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const userName = url.searchParams.get("userName");
    const questionId = url.searchParams.get("questionId");

    const userProgress = await db.userProgress.findFirst({
      where: {
        userName: String(userName),
        questionsId: String(questionId),
      },
    });

    if (userProgress) {
      return NextResponse.json({
        success: true,
        submitted: true,
        message: "You have already submitted this question.",
        userProgress: userProgress,
      });
    } else {
      return NextResponse.json({
        success: true,
        submitted: false,
        message: "You have not submitted this question yet.",
        userProgress: userProgress,
      });
    }
  } catch (error) {
    console.error("Error fetching user progress:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}
