import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const extractPostData = await request.json();

    const unitId = extractPostData.name;

    // Retrieve questions based on the unitId
    const questions = await db.question.findMany({
      where: {
        name: unitId,
      },
    });
      
    // Delete each question
    for (const question of questions) {
      await db.question.delete({
        where: {
          id: question.id,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Questions deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
