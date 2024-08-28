import express from "express";
import { connectDB } from "./db/db.js";
import customerRoutes from "./routes/customerRoute.js";
import { myrouter } from "./routes/home.js";

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use("/", myrouter);

// Use the customer routes
app.use("/", customerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
