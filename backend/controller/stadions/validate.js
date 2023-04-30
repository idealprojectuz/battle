const joi = require("joi");

class Validate {
  post = joi.object().keys({
    name: joi.string().min(3).required(),
    countryid: joi.number().required(),
    additiontime: joi.date().required(),
  });
  put = joi.object().keys({
    name: joi.string().min(3),
    countryid: joi.number(),
    additiontime: joi.date(),
  });
}

module.exports = new Validate();
