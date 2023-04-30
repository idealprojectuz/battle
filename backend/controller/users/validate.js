const joi = require("joi");

class Validate {
  login = joi.object().keys({
    email: joi
      .string()
      .min(3)
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      .required(),
    password: joi.string().min(3).required(),
  });
}

module.exports = new Validate();
