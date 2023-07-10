const Joi = require("joi");

exports.validateUser = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
        picturePath: Joi.string(),
        friends: Joi.array(),
        location: Joi.string(),
        occupation: Joi.string(),
        viewedProfile: Joi.number(),
        impressions: Joi.number(),
    });

    return schema.validate(user);
};
