import { connectDB } from "@/app/lib/mongodb";
import Payment from "@/app/models/Payment";

import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const token = searchParams.get("token");

    if (!token) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    const payment = await Payment.findOne({
      reportToken: token,
      status: "success",
    });

    if (!payment) {
      return new Response("Invalid Token", {
        status: 401,
      });
    }

    const filePath = path.join(
      process.cwd(),
      "storage",
      "astrology-reports",
      payment.assignedPdf,
    );

    if (!fs.existsSync(filePath)) {
      return new Response("File Not Found", {
        status: 404,
      });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",

        "Content-Disposition": `attachment; filename="${payment.assignedPdf}"`,
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
