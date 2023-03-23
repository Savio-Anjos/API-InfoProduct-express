import prismaClient from "../../prisma";

interface OrderRequest {
    amount: number;
    order_id: string;
    product_id: string;
}

class CreateItemService {
    async execute({amount, order_id, product_id}: OrderRequest ) {
        const order = await prismaClient.item.create({
            data: {
                amount: amount,
                order_id: order_id,
                product_id: product_id,
            }
        })

        return order;
    }
}

export { CreateItemService };