import { Router, Request, Response } from "express";

import { CreateCategoryController } from "./controllers/category/createCategoreController";
import { CreateProductController } from "./controllers/product/createProductController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle)


// Rotas product
router.post('/product', new CreateProductController().handle)

export { router };