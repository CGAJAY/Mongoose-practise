import express from "express";
import { connectDB } from "./db/db.js";
import customerRoutes from "./routes/customerRoute.js";
import { myrouter } from "./routes/home.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use("/", myrouter);

// Use the customer routes
app.use("/", customerRoutes);

// Start the server
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
