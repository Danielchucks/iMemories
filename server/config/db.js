import mongoose from "mongoose";
import config from "./key.js";

const db = config.mongoURI;

const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log("DB Connection was successful");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

export default connectDB;
