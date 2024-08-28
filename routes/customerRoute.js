import express from "express";
import {
	createCustomer,
	getCustomers,
	getCustomerById,
} from "../controllers/customerController.js";

const router = express.Router();

// /customers/
router.post("/customers", createCustomer);
router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomers);

// /customers/all
router.get("/all", createCustomer);

export default router;
