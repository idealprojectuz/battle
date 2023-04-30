const jwt = require("jsonwebtoken");

const SetToken = (payload) =>
  jwt.sign(payload, "NAJOT_BATTLE_SECRET", {
    expiresIn: "10h",
  });

module.exports = SetToken;
