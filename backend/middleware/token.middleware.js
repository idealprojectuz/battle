const jwt = require("jsonwebtoken");
const { sqlData } = require("../utils/SqlData");

const IsAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({
        status: 401,
        success: false,
        token: false,
        message: "Token majburiy",
      });
    }

    // NAJOT_BATTLE_SECRET o'rniga token berganda nima ishlatilsa shu qo'yiladi
    jwt.verify(token, "NAJOT_BATTLE_SECRET", async (err, decode) => {
      if (
        err instanceof jwt.JsonWebTokenError ||
        err instanceof jwt.TokenExpiredError
      ) {
        return res.status(498).json({
          status: 498,
          success: false,
          token: false,
          message: "Yaroqsiz token",
        });
      }

      const foundUser = await sqlData(
        "select * from users where id =?",
        decode.id
      );

      if (!foundUser.length) {
        res.status(498).json({
          status: 498,
          success: false,
          token: false,
          message: "Token bazada topilmadi :(",
        });
        return;
      }

      //userga role berib shunga qarab keyingi stepga o'tqazish
      //   if(foundUser[0].role != "admin"){
      //     uka tur yo'qol
      //   return;
      //   }

      //bundan keyingi etapda console.log(req.user) qilinsa ushbu user danniylari consolega chiqadi
      req.user = foundUser[0];

      next();
    });
  } catch {
    res.status(500).json({
      status: 500,
      success: false,
      token: false,
      message: "invalid request",
    });
    return;
  }
};

module.exports = IsAdmin;
