import { Request, Response } from "express";
import { ListItensService } from "../../services/item/ListItensService";

class ListItensController {
    async handle(req: Request, res: Response) {

        const listItensService = new ListItensService();

        const itens = await listItensService.execute();

        return res.json(itens);
    }
}

export { ListItensController };