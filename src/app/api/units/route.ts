import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const allUnits = await db.unit.findMany({
      include: { Course: true },
    });

    if (allUnits) {
      return NextResponse.json({
        success: true,
        data: allUnits,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch blog posts. Please try again",
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
