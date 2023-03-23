import prismaClient from "../../prisma";

 class ListOrderService {
    async execute() {
        const orders = await prismaClient.order.findMany();

        return orders;
    }
 }

 export { ListOrderService };