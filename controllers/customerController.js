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
