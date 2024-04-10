import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUserController";


const mailTrapmailProvider = new MailTrapMailProvider();
const mysqlUserRepository = new MysqlUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository, mailTrapmailProvider);

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController }