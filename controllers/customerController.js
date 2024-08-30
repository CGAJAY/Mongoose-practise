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

export const authenticate = (req, res, next) => {
	const authHeader = req.headers.authorization;

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

// Retrieve customers based on age filter else get all customers
export const getCustomers = async (req, res) => {
	try {
		const { gt, lt } = req.query;
		let filter = {};

		if (gt) {
			filter.age = { $gt: parseInt(gt) };
		}
		if (lt) {
			filter.age = { $lt: parseInt(lt) };
		}

		const customers = await Customer.find(filter);
		res.status(200).json(customers);
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
