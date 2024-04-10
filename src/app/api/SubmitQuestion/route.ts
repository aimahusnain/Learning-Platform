export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("userEmail");

    const userProgress = await db.userProgress.findMany({
      where: {
        userEmail: String(userEmail),
      },
      include: {Question: true}
    });

    if (userProgress) {
      return NextResponse.json({
        userProgress: userProgress,
      });
    } else {
      return NextResponse.json({
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
