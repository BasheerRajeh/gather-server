const { default: mongoose } = require("mongoose");
const Post = require("../models/Post");

exports.postGetAll = async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        req.status(500).send(error.message);
    }
};


exports.postGetUserPost = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send("Invalid User ID");
        }

        const posts = await Post.find({ author: userId });

        res.send(posts);
    } catch (error) {
        res.status(500).send(error.message)
    }
}