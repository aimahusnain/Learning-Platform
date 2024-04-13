export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
        const extractData = await request.json();

        const updatequestion = await db.question.update({
          where: { id: String(extractData.id) },
          data: { Submitted: false },
        });

    if (updatequestion
      ) {
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
