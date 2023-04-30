const removeMedia = require("../../utils/RemoveMedia");
const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const category = await sqlData("select * from category");
  res.status(200).json({ status: 200, data: category });
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
      message: `Categoriya uchun rasm qo'yilishi majburiy`,
      success: false,
    });
    return;
  }

  value.logo = `uploads/${req.file.filename}`;

  const newCategory = await sqlData(
    "INSERT INTO category (name, logo) VALUES (?, ?)",
    value.name,
    value.logo
  );
  res.status(200).json({
    status: 200,
    success: true,
    data: newCategory,
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

  const oldcategory = await sqlData(
    "select * from category where id = ? limit 1",
    req.params.id
  );
  if (!oldcategory.length) {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    res.status(404).json({
      status: 404,
      message: `Tahrirlamoqchi bo'lgan category topilmadi :(`,
      success: false,
    });
    return;
  }
  if (req.file) {
    value.logo = `uploads/${req.file.filename}`;
  }

  const updated = await sqlData(
    "update category set name = ?, logo =? where id  = ?",
    value.name || oldcategory[0].name,
    value.logo || oldcategory[0].logo,
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
  const category = await sqlData(
    "select * from category where id = ? limit 1",
    req.params.id
  );
  if (!category.length) {
    res.status(403).json({
      status: 403,
      message: "Categoriya topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: category[0] });
};

const Delete = async (req, res) => {
  const deleted = await sqlData(
    "DELETE FROM category WHERE id = ?",
    req.params.id
  );
  console.log(deleted);
  // manoni o'chdi o'chmadisini qande biladi e
  if (!deleted) {
    res.status(403).json({
      status: 403,
      message: "Categoriya topilmadi",
      success: false,
    });
    return;
  }
  res.status(200).json({ status: 200, data: {} });
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
