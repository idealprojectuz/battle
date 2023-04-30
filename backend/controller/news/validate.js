const joi = require("joi");

class Validate {
  post = joi.object().keys({
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    newscategoryid: joi.number().required(),
    created_ad: joi.date().required(),
  });
  put = joi.object().keys({
    title: joi.string().min(3),
    description: joi.string().min(3),
    newscategoryid: joi.number(),
    created_ad: joi.date(),
  });
}

module.exports = new Validate();
