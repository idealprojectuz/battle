const SetToken = require("../../utils/SetToken");
const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Login = async (req, res) => {
  const { error, value } = validate.login.validate(req.body);
  if (error) {
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const data = await sqlData(
    "select * from users where email = ? and password= ? limit 1",
    value.email,
    value.password
  );
  if (!data.length) {
    res.status(403).json({
      status: 403,
      message: "Ma'lumot topilmadi",
      success: false,
    });
    return;
  }
  res
    .status(200)
    .json({ status: 200, data: data[0], token: SetToken({ id: data[0].id }) });
};

class CategoryController {
  async Login(req, res) {
    MyFn(req, res, Login);
  }
}
module.exports = new CategoryController();
