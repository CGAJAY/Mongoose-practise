import express from "express";
import {
	createCustomer,
	getCustomers,
	getCustomerById,
	getCustomersUnder30,
} from "../controllers/customerController.js";

const router = express.Router();

// /customers/
router.post("/customers", createCustomer);
router.get("/all", getCustomers);
router.get("/under30", getCustomersUnder30);
router.get("/customers/:id", getCustomerById);

// /customers/all
router.get("/all", createCustomer);

export default router;
