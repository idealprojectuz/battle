const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const data = await sqlData("select * from stadions");
  res.status(200).json({ status: 200, data });
};

const Add = async (req, res) => {
  const { error, value } = validate.post.validate(req.body);
  if (error) {
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const newData = await sqlData(
    "INSERT INTO stadions (name, countryid, additiontime) VALUES (?, ?,?)",
    value.name,
    value.countryid,
    value.additiontime
  );
  res.status(200).json({
    status: 200,
    data: newData,
    message: `Muvaffaqiyatli saqlandi`,
  });
};

const Edit = async (req, res) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const oldData = await sqlData(
    "select * from stadions where id = ? limit 1",
    req.params.id
  );
  if (!oldData.length) {
    res.status(404).json({
      status: 404,
      message: `Ma'lumot topilmadi`,
      success: false,
    });
    return;
  }

  const updated = await sqlData(
    "update stadions set name = ?, countryid =?, additiontime =? where id  = ?",
    value.name || oldData[0]?.name,
    value.countryid || oldData[0]?.countryid,
    value.additiontime || oldData[0]?.additiontime,
    req.params.id
  );
  res.status(200).json({
    status: 200,
    success: true,
    data: updated,
    message: `Muvaffaqiyatli yangilandi`,
  });
};

const GetById = async (req, res) => {
  const data = await sqlData(
    "select * from stadions where id = ? limit 1",
    req.params.id
  );
  if (!data.length) {
    res.status(403).json({
      status: 403,
      message: "Ma'lumot topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: data[0] });
};

const Delete = async (req, res) => {
  const deleted = await sqlData(
    "DELETE FROM stadions WHERE id = ?",
    req.params.id
  );

  if (!deleted) {
    res.status(403).json({
      status: 403,
      message: "Ma'lumot topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: deleted });
};

class CategoryController {
  async Get(req, res) {
    MyFn(req, res, Get);
  }
  async Add(req, res) {
    MyFn(req, res, Add);
  }
  async Edit(req, res) {
    MyFn(req, res, Edit);
  }
  async GetById(req, res) {
    MyFn(req, res, GetById);
  }
  async Delete(req, res) {
    MyFn(req, res, Delete);
  }
}
module.exports = new CategoryController();
