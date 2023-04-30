const joi = require("joi");

class Validate {
  post = joi.object().keys({
    name: joi.string().min(3).required(),
  });
  put = joi.object().keys({
    name: joi.string().min(3),
  });
}

module.exports = new Validate();
