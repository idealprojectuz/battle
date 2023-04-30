const joi = require("joi");

class Validate {
  post = joi.object().keys({
    round: joi.number().required(),
    clubid: joi.number().required(),
    eventsid: joi.number().required(),
    additiontime: joi.date().required(),
  });
  put = joi.object().keys({
    round: joi.number(),
    clubid: joi.number(),
    eventsid: joi.number(),
    additiontime: joi.date(),
  });
}

module.exports = new Validate();
