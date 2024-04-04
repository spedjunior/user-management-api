import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PostgresUserRepository } from "../../repositories/implementations/PostGresUserRepository";

const mailtrapProvider = new MailTrapMailProvider();

const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase }