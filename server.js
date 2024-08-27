import express from "express";
import { connectDB } from "./config/db.js";
import customerRoutes from "./routes/customerRoute.js";
import { homeRouter } from "./routes/home.js";

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use("/", homeRouter);

// Use the customer routes
app.use("/customers", customerRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
