import prismaClient from "../../prisma";
interface CategoryRequest {
    name: string;
}

 class CreateCategoryService {
    async execute({ name }: CategoryRequest) {

        //verificar se enviou um nome
        if(!name) {
            throw new Error("Nome não informado");
        }

        //verificar se a categoria ja está cadastrada
        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if(categoryAlreadyExists) {
            throw new Error("Categoria já cadastrada");
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            }
        })

        return  category;
        
    }
 }

 export { CreateCategoryService }