export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();

    const updatedBlogPost = await db.unit.update({
      where: {
        id: String(extractData.id), // Convert id to string
      },
      data: {
        name: extractData.name,
        noidnumber: extractData.noidnumber,
      },
    });

    if (updatedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Blog post updated",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the post! Please try again",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
