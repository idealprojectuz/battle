const removeMedia = require("../../utils/RemoveMedia");
const MyFn = require("../../utils/ShablonTryCatch");
const { sqlData } = require("../../utils/SqlData");
const validate = require("./validate");

const Get = async (_, res) => {
  const data = await sqlData("select * from news");
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
      message: `Yangilik uchun rasm qo'yilishi majburiy`,
      success: false,
    });
    return;
  }

  value.featured_image = `uploads/${req.file.filename}`;

  const newData = await sqlData(
    "INSERT INTO news (title, featured_image, description, newscategoryid, created_ad) VALUES (?, ?, ?,?,?)",
    value.title,
    value.featured_image,
    value.description,
    value.newscategoryid,
    value.created_ad
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
    "select * from news where id = ? limit 1",
    req.params.id
  );
  if (!oldData.length) {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    res.status(404).json({
      status: 404,
      message: `Tahrirlamoqchi bo'lgan yangilik topilmadi :(`,
      success: false,
    });
    return;
  }
  if (req.file) {
    value.featured_image = `uploads/${req.file.filename}`;
  }

  const updated = await sqlData(
    "update news set title = ?, featured_image =?, description =?, newscategoryid = ?, created_ad =?  where id  = ?",
    value.title || oldData[0]?.title,
    value.featured_image || oldData[0]?.featured_image,
    value.description || oldData[0]?.description,
    value.newscategoryid || oldData[0]?.newscategoryid,
    value.created_ad || oldData[0]?.created_ad,
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
    "select * from news where id = ? limit 1",
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
  const deleted = await sqlData("DELETE FROM news WHERE id = ?", req.params.id);

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
