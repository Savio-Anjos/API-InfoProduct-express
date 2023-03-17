import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { CreateProductController } from "./controllers/product/createProductController";

import  uploadConfig  from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle)


// Rotas product
router.post('/product', upload.single("file"), new CreateProductController().handle)

export { router };