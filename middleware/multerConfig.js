import multer from "multer";
import path from "path";

const storage = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Formato de imagen no valido"), false);
    }
  },
};

const upload = multer({
  storage: storage.storage,
  fileFilter: storage.fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

export default upload;
