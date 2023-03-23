import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

 class DeleteOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteOrderService = new DeleteOrderService();

        const order = await deleteOrderService.execute({
            id,
        })

        return res.json(order);
    }
 }

 export { DeleteOrderController };