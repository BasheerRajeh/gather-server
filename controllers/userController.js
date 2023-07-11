const Joi = require("joi");
const User = require("../models/User");
const mongoose = require("mongoose");
const pick = require("lodash/pick");
const bcrypt = require("bcrypt");

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

exports.userCreate = async (req, res) => {
    try {
        const data = pick(req.body, [
            "firstName",
            "lastName",
            "email",
            "password",
            "picturePath",
            "friends",
            "location",
            "occupation",
            "viewdProfile",
            "impressions",
        ]);

        const { error } = this.validateUser(data);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: data.email });
        if (user) return res.status(400).send("User is already registered");

        user = new User(data);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = user.generateAuthToken();

        res
            .status(201)
            .header("x-auth-token", token)
            .send(pick(user, ["firstName", "lastName", "email"]));
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.userGetMe = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
