import prismaClient from "../../prisma";

 class ListItensService {
    async execute() {
       const itens = await prismaClient.item.findMany();

        return itens;
    }
 }

 export { ListItensService };