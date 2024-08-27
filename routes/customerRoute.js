import express from "express";
import { createCustomer } from "../controllers/customerController.js";

const router = express.Router();

// /customers/
router.post("/customers", createCustomer);

// /customers/all
router.get("/all", createCustomer);

export default router;
