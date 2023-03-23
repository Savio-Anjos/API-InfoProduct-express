import prismaClient from "../../prisma";

interface OrderRequest {
    id: string;
}

 class DeleteOrderService {
    async execute({ id }: OrderRequest) {
        const order = await prismaClient.order.delete({
            where: {
                id: id,
            }
        });

        return order;
    }
 }

 export { DeleteOrderService };