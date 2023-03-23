import prismaClient from "../../prisma";

interface OrderRequest {
    name: string;
}

class CreateOrderService {
    async execute ({ name }: OrderRequest) {
        const order = await prismaClient.order.create({
            data: {
                name,
            },
        });

        return order;
    }
}

export { CreateOrderService };