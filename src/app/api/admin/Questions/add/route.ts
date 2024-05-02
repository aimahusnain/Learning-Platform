import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();

    const newlyCreatedPost = await db.question.create({
      data: {
        name: extractPostData.name,
        description: extractPostData.description,
        videoReferenceVideo: extractPostData.videoReferenceVideo,
        Unit: { connect: { id: extractPostData.unitId } },
      },
    });

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "New question added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
