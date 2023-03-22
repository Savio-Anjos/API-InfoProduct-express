import { Router, Request, Response } from "express";

//Category
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DeleteProductController } from "./controllers/DeleteProductController";

//Product
import { CreateProductController } from "./controllers/product/createProductController";
import { ListProductController } from "./controllers/product/ListProductController";


const router = Router();



router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle);
router.get('/category', new ListCategoryController().handle);
router.delete('/category', new DeleteCategoryController().handle);

 
// Rotas product
router.post('/product', new CreateProductController().handle);
router.get('/product', new ListProductController().handle);
router.delete('/product', new DeleteProductController().handle);

export { router };