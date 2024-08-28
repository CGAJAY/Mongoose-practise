// Importing the mongoose library
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// mongoDB connection string
const uri = process.env.DB_URI;
// asynchronous function to connect to mongoDB database
export const connectDB = async () => {
	try {
		await mongoose.connect(uri);
		console.log("MongoDB connected");
	} catch (err) {
		console.error(
			"Error connecting to MongoDB:",
			err.message
		);
		process.exit(1);
	}
};
