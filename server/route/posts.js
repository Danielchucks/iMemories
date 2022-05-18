import express from "express";
const router = express.Router();

/** Importing controllers */
import { getPosts, createPost } from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/posts", createPost);

export default router;
