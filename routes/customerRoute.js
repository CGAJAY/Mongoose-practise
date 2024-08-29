import express from "express";
import {
	createCustomer,
	getCustomers,
	getCustomerById,
	getCustomersUnder30,
	getCustomersOver30,
	getCustomersByName,
} from "../controllers/customerController.js";

const router = express.Router();

// /customers/
router.post("/", createCustomer);
router.get("/", getCustomers);
router.get("/under30", getCustomersUnder30);
router.get("/over30", getCustomersOver30);
router.get("/:name", getCustomersByName);
router.get("/:id", getCustomerById);

export { router };
