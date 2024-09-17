import Products from "../models/productsModel.js";

/** MULTER SECTION  **/
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// dirname setup for multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer setup object with storage and fileFilter
const multerSetup = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb.null, `${file.fieldname}-${Date.now()}.${extension}`;
    },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Formato No válido"));
      }
    },
  })),
};

// Multer middleware
const upload = multer(multerSetup).single("image");

/** PRODUCTS CONTROLLERS **/

const uploadImage = (req, res, next) => {
    
};