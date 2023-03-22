import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController {
    async handle(req: Request, res: Response) {

        const listrPoductService = new ListProductService();

        const product = await listrPoductService.execute();

        return res.json(product);
    }
 }

 export { ListProductController };