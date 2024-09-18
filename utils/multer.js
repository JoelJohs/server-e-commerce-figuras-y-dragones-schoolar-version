import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = path.join(path.resolve(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("es-ES").replace(/\//g, "-");
    const productName = req.body.productName || "unknown-product";
    const formattedProductName = productName.replace(/\s+/g, "-");
    const fileExtension = path.extname(file.originalname);

    cb(null, `${formattedProductName}_${formattedDate}${fileExtension}`);
  },
});

const upload = multer({ storage });

export { upload };
