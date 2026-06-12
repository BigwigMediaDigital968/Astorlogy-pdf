import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    zodiac: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    orderId: {
      type: String,
      required: true,
    },

    paymentId: {
      type: String,
    },

    status: {
      type: String,
      enum: ["created", "success", "failed"],
      default: "created",
    },

    reportToken: String,

    assignedPdf: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
