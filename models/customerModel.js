import mongoose from "mongoose";

// Define the schema
const customerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	age: { type: Number, min: 0 },
	createdAt: { type: Date, default: Date.now },
});

// Create a model from the schema
export const Customer = mongoose.model(
	"Customer",
	customerSchema
);
