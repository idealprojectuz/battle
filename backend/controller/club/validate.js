const joi = require("joi");

class Validate {
  post = joi.object().keys({
    name: joi.string().min(3).required(),
    countryid: joi.number().required(),
  });
  put = joi.object().keys({
    name: joi.string().min(3),
    countryid: joi.number(),
  });
}

module.exports = new Validate();
