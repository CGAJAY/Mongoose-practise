// Importing the mongoose library
import mongoose from "mongoose";

// mongoDB connection string
const uri =
	"mongodb+srv://admin:12345@cluster0.g1dam.mongodb.net/starlink?retryWrites=true&w=majority&appName=Cluster0";

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
