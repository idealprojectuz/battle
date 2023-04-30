const joi = require("joi");

class Validate {
  post = joi.object().keys({
    command1: joi.number().required(),
    command2: joi.number().required(),
    stadions: joi.number().required(),
    categoryid: joi.number().required(),
    eventtime: joi.date().required(),
    additiontime: joi.date().required(),
  });
  put = joi.object().keys({
    command1: joi.number(),
    command2: joi.number(),
    stadions: joi.number(),
    categoryid: joi.number(),
    eventtime: joi.date(),
    additiontime: joi.date(),
  });
}

module.exports = new Validate();
