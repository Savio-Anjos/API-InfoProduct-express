import { Request, Response } from "express";
import { CreateItemService } from "../../services/item/CreateItemService";

 class CreateItemController {
    async handle(req: Request, res: Response) {
        const { amount, order_id, product_id } = req.body;

        const createItemService = new CreateItemService();

        const item = await createItemService.execute({
            amount,
            order_id,
            product_id
        })

        return res.json(item);
    }
 }

 export { CreateItemController };