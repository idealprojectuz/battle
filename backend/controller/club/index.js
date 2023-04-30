const removeMedia = require("../../utils/RemoveMedia");
const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const data = await sqlData("select * from clubs");
  res.status(200).json({ status: 200, data: data });
};

const Add = async (req, res) => {
  if (req.file && req.file.mimetype.split("/")[0] !== "image") {
    removeMedia(req.file.filename);
    res.status(403).json({ status: 403, message: "faqat rasm yuklay olasiz" });
    return;
  }

  const { error, value } = validate.post.validate(req.body);
  if (error) {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  if (!req.file) {
    res.status(403).json({
      status: 403,
      message: `Klub uchun rasm qo'yilishi majburiy`,
      success: false,
    });
    return;
  }

  value.logo = `uploads/${req.file.filename}`;

  //mano'da country idga qaramey bosvoryabti anu foreign keylarni yaxshilang sal
  const newData = await sqlData(
    "INSERT INTO clubs (name, logo, countryid) VALUES (?, ?, ?)",
    value.name,
    value.logo,
    value.countryid
  );
  res.status(200).json({
    status: 200,
    success: true,
    data: newData,
    message: `Muvaffaqiyatli saqlandi`,
  });
};

const Edit = async (req, res) => {
  if (req.file && req.file.mimetype.split("/")[0] !== "image") {
    removeMedia(req.file.filename);
    res.status(403).json({ status: 403, message: "faqat rasm yuklay olasiz" });
    return;
  }

  const { error, value } = validate.put.validate(req.body);
  if (error) {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    res.status(403).json({
      status: 403,
      message: String(error["details"][0].message),
      success: false,
    });
    return;
  }

  const oldData = await sqlData(
    "select * from clubs where id = ? limit 1",
    req.params.id
  );
  if (!oldData.length) {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    res.status(404).json({
      status: 404,
      message: `Tahrirlamoqchi bo'lgan klub topilmadi :(`,
      success: false,
    });
    return;
  }
  if (req.file) {
    value.logo = `uploads/${req.file.filename}`;
  }

  const updated = await sqlData(
    "update clubs set name = ?, logo =?, countryid =? where id  = ?",
    value.name || oldData[0].name,
    value.logo || oldData[0].logo,
    value.countryid || oldData[0].countryid,
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
    "select * from clubs where id = ? limit 1",
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
    "DELETE FROM clubs WHERE id = ?",
    req.params.id
  );

  if (!deleted) {
    res.status(403).json({
      status: 403,
      message: "Klub topilmadi",
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
