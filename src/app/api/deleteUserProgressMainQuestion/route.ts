// export const dynamic = "force-dynamic";

// import { db } from "@/lib/db";
// import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(req: NextRequest) {
//   try {
//     const url = new URL(req.url);
//     const userEmail = url.searchParams.get("email");
//     const userQuestionId = url.searchParams.get("questionId");

//     const Question = await db.userProgressMainQuestion.deleteMany({
//       where: {
//         userEmail: String(userEmail),
//         mainQuestionsId: String(userQuestionId),
//       },
//     });

//     if (Question) {
//       return NextResponse.json({
//         success: true,
//         data: Question,
//       });
//     } else {
//       return NextResponse.json({
//         success: false,
//         message: "Failed to search results of questions",
//       });
//     }
//   } catch (e) {
//     console.log(e);

//     return NextResponse.json({
//       success: false,
//       message: "Something went wrong ! Please try again",
//     });
//   }
// }


import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const userEmail = url.searchParams.get("email");
    const userQuestionId = url.searchParams.get("questionId");

        const Question = await db.userProgressMainQuestion.deleteMany({
          where: {
            userEmail: String(userEmail),
            questionId: String(userQuestionId),
          },
        });

    if (Question) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete the blog! Please try again",
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