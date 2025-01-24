import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
          name: { type: String, required: true },
          email: { type: String, required: true },
          phone: { type: Number, required: true },
          businessCategory : { type: String, required: true },
          address: { type: String, required: true },
},{ timestamps: true })

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
