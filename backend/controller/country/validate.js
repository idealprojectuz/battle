const joi = require("joi");

class Validate {
  post = joi.object().keys({
    name: joi.string().min(3).required(),
    nicename: joi.string().min(3).required(),
    iso: joi.string().min(1).required(),
    iso3: joi.string().min(1).required(),
    numcode: joi.number().min(3),
    phonecode: joi.number().min(3).required(),
  });
  put = joi.object().keys({
    name: joi.string().min(3),
    nicename: joi.string().min(3),
    iso: joi.string().min(1),
    iso3: joi.string().min(1),
    numcode: joi.number().min(3),
    phonecode: joi.number().min(3),
  });
}

module.exports = new Validate();
