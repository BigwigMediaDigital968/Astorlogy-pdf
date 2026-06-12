import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/app/lib/razorpay";
import { connectDB } from "@/app/lib/mongodb";
import Payment from "@/app/models/Payment";

export async function POST(req: NextRequest) {
  try {
    const { zodiac } = await req.json();

    if (!zodiac) {
      return NextResponse.json(
        {
          success: false,
          message: "Zodiac is required",
        },
        { status: 400 },
      );
    }

    const amount = Math.floor(Math.random() * 51) + 250;

    console.log({
      keyId: process.env.RAZORPAY_KEY_ID,
      secretExists: !!process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    await connectDB();

    await Payment.create({
      zodiac,
      amount,
      orderId: order.id,
      status: "created",
    });

    return NextResponse.json({
      success: true,
      amount,
      order,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Order creation failed",
      },
      { status: 500 },
    );
  }
}
