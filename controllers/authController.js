const Joi = require("joi");
const pick = require("lodash/pick");
const User = require("../models/User");
const bcrypt = require("bcrypt");
function validate(data) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(data);
}

exports.authSignin = async (req, res) => {
    try {
        const data = pick(req.body, ["email", "password"]);

        const { error } = validate(data);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: data.email });
        if (!user) return res.status(400).send("Invalid email or password");

        const validPassword = await bcrypt.compare(data.password, user.password);
        if (!validPassword)
            return res.status(400).send("Invalid email or password");

        const token = user.generateAuthToken();
        res
            .header("x-auth-token", token)
            .send(pick(user, ["firstName", "lastName", "email"]));
    } catch (error) {
        res.status(500).send(error.message);
    }
};
