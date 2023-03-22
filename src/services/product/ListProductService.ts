import prismaClient from "../../prisma";

class ListProductService {
    async execute() {
        const product = await prismaClient.product.findMany();

        return product;
    
    }

}

export { ListProductService }