import Payment from "@/app/models/Payment";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const isValid = generatedSignature === razorpay_signature;

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 400,
        },
      );
    }

    const token = uuid();
    const pdfDirectory = path.join(
      process.cwd(),
      "storage",
      "astrology-reports",
    );

    const files = fs.readdirSync(pdfDirectory);

    const randomFile = files[Math.floor(Math.random() * files.length)];

    await Payment.findOneAndUpdate(
      {
        orderId: razorpay_order_id,
      },
      {
        status: "success",
        paymentId: razorpay_payment_id,
        reportToken: token,
        assignedPdf: randomFile,
      },
    );

    return NextResponse.json({
      success: true,
      token,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
