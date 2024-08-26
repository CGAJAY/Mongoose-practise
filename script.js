// Importing the mongoose library
import mongoose from "mongoose";

// mongoDB connection string
const uri =
	"mongodb+srv://admin:admin@cluster0.g1dam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function to connect to mongoDB database
async function connectToDatabase() {
	try {
		// connecting to database
		await mongoose.connect(uri);
		// log success message if connection is established
		console.log("Connected");
	} catch (err) {
		// if there is an error, catch it and log it
		console.error("Not connected", err);
	}
}
//  call the function to connect to database
connectToDatabase();
