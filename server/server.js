import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

/** Importing files */
import connectDB from "./config/db.js";
import postRoutes from "./route/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
	console.log(`iMemeories App is up and running on Port ${PORT}`);
});
