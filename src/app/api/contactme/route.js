import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, phone, enquiry, isChecked } = reqBody;
    console.log(reqBody);
    await axios
      .post(
        process.env.GOOGLE_SHEET_WEB_APP_URL,
        {
          name,
          email,
          phone,
          enquiry,
          isChecked,
        }
      )
      .then((res) => {
        console.log("result ", res.data);
      })
      .catch(() => {
        console.log("some error occur");
      });

    return NextResponse.json({
      message: "Form Submitted Successfully",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
