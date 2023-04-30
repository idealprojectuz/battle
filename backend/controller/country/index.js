const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const data = await sqlData("select * from country");
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
    "INSERT INTO country (name, nicename, iso, iso3, numcode, phonecode) VALUES (?, ?,?,?,?,?)",
    value.name,
    value.nicename,
    value.iso,
    value.iso3,
    value.numcode,
    value.phonecode
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
    "select * from country where id = ? limit 1",
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
    "update country set name = ?, nicename =?, iso =?, iso3 = ?, numcode = ?, phonecode =?  where id  = ?",
    value.name || oldData[0]?.name,
    value.nicename || oldData[0]?.nicename,
    value.iso || oldData[0]?.iso,
    value.iso3 || oldData[0]?.iso3,
    value.numcode || oldData[0]?.numcode,
    value.phonecode || oldData[0]?.phonecode,
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
    "select * from country where id = ? limit 1",
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
    "DELETE FROM country WHERE id = ?",
    req.params.id
  );
  console.log(deleted);
  // manoni o'chdi o'chmadisini qande biladi e
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
