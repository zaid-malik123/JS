import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    name: {
      type: String,
    },

    order: {
      type: String,
    },

    address: {
      type: String,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
