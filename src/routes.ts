import { Router, Request, Response } from "express";

import { CreateCategoryController } from "./controllers/category/createCategoreController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API" });
});


// Rotas category
router.post('/category', new CreateCategoryController().handle)

export { router };