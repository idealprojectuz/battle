const express = require("express");
const Controller = require("./index");
const checkidMiddleware = require("../../middleware/checkid.middleware");
const uploadMulter = require("../../utils/Multer").single("logo");
const router = express.Router();

router.get("/get/all", Controller.Get);
router.get("/:id", checkidMiddleware, Controller.GetById);
router.delete("/:id", checkidMiddleware, Controller.Delete);
router.post(
  "/add",
  (req, res, next) => {
    uploadMulter(req, res, function (err) {
      if (err || !req.file) {
        res.status(404).json({
          status: 404,
          success: false,
          message: `Logo qo'shish uchun 'logo' keyidan foydalanib 1ta rasm yuboring`,
        });
        return;
      }
      next();
    });
  },
  Controller.Add
);
router.put(
  "/edit/:id",
  checkidMiddleware,
  (req, res, next) => {
    uploadMulter(req, res, function (err) {
      if (err) {
        res.status(404).json({
          status: 404,
          success: false,
          message: `Logo qo'shish uchun 'logo' keyidan foydalanib 1ta rasm yuboring`,
        });
        return;
      }
      next();
    });
  },
  Controller.Edit
);

module.exports = router;
