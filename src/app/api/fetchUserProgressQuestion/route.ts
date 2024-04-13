// export const dynamic = "force-dynamic";

// import { db } from "@/lib/db";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const extractData = await req.json();

//     const Question = await db.userProgressQuestion.findMany({
//       where: {
//         id: String(extractData.id),
//         userEmail: String(extractData.userEmail),
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



export const dynamic = "force-dynamic";

import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
      const userEmail = url.searchParams.get("userEmail");
      
    const Question = await db.userProgressQuestion.findMany({
        where: {
          id: String(id),
          userEmail: String(userEmail),
        },
    });

    if (Question.length > 0) {
      return NextResponse.json({
        success: true,
        data: Question,
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
