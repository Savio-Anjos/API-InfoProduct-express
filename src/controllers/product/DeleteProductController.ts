import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";


class DeleteProductController { 
    async handle(req: Request, res: Response) {

        const { id } = req.body;

        const deleteProductService = new DeleteProductService();

        const product = await deleteProductService.execute({
            id: id,
        })

        return res.json(product);
    }
}

export { DeleteProductController };