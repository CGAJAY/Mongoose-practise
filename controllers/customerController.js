import { Customer } from "../models/customerModel.js";

// Create a new customer
export const createCustomer = async (req, res) => {
	try {
		const newCustomer = new Customer({
			name: req.body.name,
			email: req.body.email,
			age: req.body.age,
		});
		const savedCustomer = await newCustomer.save();
		res.status(201).json(savedCustomer);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Get all customers
export const getCustomers = async (req, res) => {
	try {
		const customers = await Customer.find();
		res.json(customers);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Get a customer by ID
export const getCustomerById = async (req, res) => {
	try {
		const customer = await Customer.findById(req.params.id);
		if (!customer) {
			return res
				.status(404)
				.json({ message: "Customer not found" });
		}
		res.json(customer);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
