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

// Get a customers with age less than 30
export const getCustomersUnder30 = async (req, res) => {
	try {
		// Find customers where age is less than 30
		const customers = await Customer.find({
			age: { $lt: 30 },
		});
		res.status(200).json(customers);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Get a customers with age greater than 30
export const getCustomersOver30 = async (req, res) => {
	try {
		// Find customers where age is greater than 30
		const customers = await Customer.find({
			age: { $gt: 30 },
		});
		res.status(200).json(customers);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Get a customers where the name matches the given name
export const getCustomersByName = async (req, res) => {
	try {
		// Extract the name from the request parameters
		const name = req.params.name;

		// Find customers where the name matches the given name
		const customers = await Customer.find({ name: name });

		res.status(200).json(customers);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};
