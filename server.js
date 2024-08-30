import express from "express";
import { connectDB } from "./db/db.js";
import { router } from "./routes/customerRoute.js";
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

// Middleware to authenticate user when retrieving data from database
export const authenticate = (req, res, next) => {
	const authHeader = req.headers.authorization;
	console.log(authHeader);

	if (!authHeader) {
		return res
			.status(401)
			.json({ message: "Authorization header missing" });
	}

	const [type, password] = authHeader.split(" ");

	if (
		type !== "Bearer" ||
		password !== process.env.RETRIEVE_PASSWORD
	) {
		return res
			.status(403)
			.json({ message: "Forbidden: Incorrect password" });
	}

	next();
};

// Use the customer routes
app.post("/customers", router);
app.get("/customers", authenticate, router);

// Start the server
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
