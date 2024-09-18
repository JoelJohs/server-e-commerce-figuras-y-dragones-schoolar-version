import Products from "../models/Products.js";
import { upload } from "../utils/multer.js";
import path from "path";

// Upload image and validate format with multer
export const uploadImage = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      return res.status(400).json({ message: error });
    }
    return next();
  });
};

// Create a new product
export const createProduct = async (req, res, next) => {
  const product = new Products(req.body);

  if (req.file) {
    product.image = req.file.path;
  }

  await product.save();
  res.status(201).json(product);

  try {
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const tryPostFile = async (req, res, next) => {
  if (req.file) {
    // Obtener la ruta relativa a partir de la carpeta de uploads
    const relativePath = path.relative(path.resolve(), req.file.path);
    const relativeDestination = path.relative(
      path.resolve(),
      req.file.destination
    );

    // Actualizar el objeto file con la ruta relativa
    const updatedFile = {
      ...req.file,
      path: relativePath,
      destination: relativeDestination,
    };

    console.log(updatedFile); // Imprimir el objeto con la ruta relativa
    res.status(200).json(updatedFile); // Responder con el objeto actualizado
  } else {
    res.status(400).json({ message: "No file uploaded" });
  }
};
