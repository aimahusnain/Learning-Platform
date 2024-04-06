export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const unitid = url.searchParams.get("id");

    const searchedunit = await db.unit.findUnique({
      where: {
        id: String(unitid),
      },
    });

    if (searchedunit) {
      return NextResponse.json({
        success: true,
        data: searchedunit,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to search results",
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
