export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const startIndex = url.searchParams.get("startIndex");
    const endIndex = url.searchParams.get("endIndex");

    if (!startIndex || !endIndex) {
      return NextResponse.json({
        success: false,
        message: "startIndex and endIndex are required query parameters",
      });
    }

    const units = await fetchUnitsInRange(
      parseInt(startIndex as string),
      parseInt(endIndex as string)
    );

    if (units.length > 0) {
      return NextResponse.json({
        success: true,
        data: units,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "No units found in the specified range",
      });
    }
  } catch (error) {
    console.error("Error fetching units:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

async function fetchUnitsInRange(startIndex: number, endIndex: number) {
  try {
    const allUnits = await db.unit.findMany({
      include: { Course: true },
    });

    const unitsInRange = allUnits.slice(startIndex, endIndex + 1);

    return unitsInRange;
  } catch (error) {
    throw new Error("Error fetching units within the range");
  }
}
