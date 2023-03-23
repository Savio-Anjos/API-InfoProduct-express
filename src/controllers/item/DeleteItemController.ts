import { Request, Response } from "express";
import { DeleteItemService } from "../../services/item/DeleteItemService";

 class DeleteItemController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteItemService = new DeleteItemService();

        const item = await deleteItemService.execute({
            id,
        })

        return res.json(item);
    }
 }

 export { DeleteItemController };