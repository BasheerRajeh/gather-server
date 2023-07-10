const Joi = require("joi");
const User = require("../models/User");
const mongoose = require("mongoose");

exports.validateUser = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
        picturePath: Joi.string(),
        friends: Joi.array().items(Joi.string()),
        location: Joi.string(),
        occupation: Joi.string(),
        viewedProfile: Joi.number(),
        impressions: Joi.number(),
    });

    return schema.validate(user);
};

exports.userGet = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid User ID");
        }

        const user = await User.findById(id);

        if (!user)
            return res.status(404).send("The User with the given ID not found");

        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.userGetAll = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.userGetAllFriends = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid User ID");
        }

        const user = await User.findById(id).populate("friends");

        if (!user)
            return res.status(404).send("The User with the given ID not found");

        res.send(user.friends);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
