const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, path.join(__dirname, "..", "uploads/"));
  },
  filename: (_, file, cb) => {
    cb(
      null,
      ` ${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadMulter = multer({ storage });

module.exports = uploadMulter;
