import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { GetUserUseCase } from "./GetUserUseCase";
import { GetUserController } from "./GetUserController";


const mysqlUserRepository = new MysqlUserRepository();

const getUserUseCase = new GetUserUseCase(mysqlUserRepository);

const getUserController = new GetUserController(getUserUseCase)

export { getUserController }