import { Router, Request, Response } from "express";

//Category
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//Product
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";

//Order
 import { CreateOrderController } from "./controllers/order/CreateOrderController";
 import { ListOrderController } from "./controllers/order/ListOrderController";
 import { DeleteOrderController } from "./controllers/order/DeleteOrderController";

 //Item
 import { CreateItemController } from "./controllers/item/CreateItemController";
 //import { ListItemController } from "./controllers/item/ListItemController";
 //import { DeleteItemController } from "./controllers/item/DeleteItemController



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


// Rotas order
router.post('/order', new CreateOrderController().handle);
router.get('/order', new ListOrderController().handle);
router.delete('/order', new DeleteOrderController().handle);

// Rotas item
router.post('/item', new CreateItemController().handle);

export { router };