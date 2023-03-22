import { Router, Request, Response } from "express";

//Category
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Product
import { CreateProductController } from "./controllers/product/createProductController";


const router = Router();



router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle);
router.get('/category', new ListCategoryController().handle);
router.delete('/category', new DeleteCategoryController().handle);


// Rotas product
router.post('/product', new CreateProductController().handle)

export { router };