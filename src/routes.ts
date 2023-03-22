import { Router, Request, Response } from "express";

import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/ListCategoryController";
import { CreateProductController } from "./controllers/product/createProductController";


const router = Router();



router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)


// Rotas product
router.post('/product', new CreateProductController().handle)

export { router };