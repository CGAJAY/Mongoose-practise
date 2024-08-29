import express from "express";
import {
	createCustomer,
	getCustomers,
	getCustomerById,
	getCustomersByName,
} from "../controllers/customerController.js";

const router = express.Router();

// /customers/
router.post("/", createCustomer);
router.get("/", getCustomers);
router.get("/:name", getCustomersByName);
router.get("/:id", getCustomerById);

export { router };
