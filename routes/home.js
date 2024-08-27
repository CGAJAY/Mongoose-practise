import express from "express";
import { getHome, getAbout } from "../controllers/home.js";
const myrouter = express.Router();

// /customers/
myrouter.get("/", getHome);

// /customers/all
myrouter.get("/about", getAbout);

export { myrouter };
