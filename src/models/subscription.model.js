import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // Who is subscribing
      ref: "User",
    },
    channnel: {
      type: Schema.Types.ObjectId, //one to whom "Subscriber" is subscribing
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", subscriptionSchema);
