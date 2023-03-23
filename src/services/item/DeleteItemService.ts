import prismaClient from "../../prisma";

interface ItemRequest {
    id: string;
}

class DeleteItemService {
    async execute({ id }: ItemRequest) {
       const item = await prismaClient.item.delete({
            where: {
                id: id
            }
        });

        return item;
    }
}

export { DeleteItemService };