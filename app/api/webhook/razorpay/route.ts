import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = req.headers.get("x-razorpay-signature");

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  if (signature !== expected) {
    return new Response("Invalid Signature", {
      status: 400,
    });
  }

  const event = JSON.parse(body);

  if (event.event === "payment.captured") {
    // Update payment success
  }

  return Response.json({
    received: true,
  });
}
