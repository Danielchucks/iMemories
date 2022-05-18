import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likes: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Post = mongoose.model("posts", PostSchema);

export default Post;
