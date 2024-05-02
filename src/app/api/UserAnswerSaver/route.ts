  export const dynamic = "force-dynamic";

  import { db } from "@/lib/db";
  import { NextRequest, NextResponse } from "next/server";

  export async function GET(req: NextRequest) {
    try {
      const url = new URL(req.url);
      const userEmail = url.searchParams.get("email");
      const mainQuestionsId = url.searchParams.get("mainQuestionsId");
      // const extractData = await req.json();

      const Question = await db.userProgressMainQuestion.findFirst({
        where: {
          // userEmail: String(extractData.userEmail),
          // mainQuestionsId: String(extractData.mainQuestionsId),
          userEmail: String(userEmail),
          mainQuestionsId: String(mainQuestionsId),
        },
      });

      if (Question) {
        return NextResponse.json({
          success: true,
          data: Question,
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
