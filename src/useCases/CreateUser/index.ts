import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";


const mailtrapProvider = new MailTrapMailProvider();

const mysqlUserRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUserRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }