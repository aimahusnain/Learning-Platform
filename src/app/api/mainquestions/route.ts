export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const Questionid = url.searchParams.get("id");

    const MainQuestion = await db.mainQuestions.findMany({
      where: {
        questionid: String(Questionid),
      },
    });

    if (MainQuestion) {
      return NextResponse.json({
        success: true,
        data: MainQuestion,
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
