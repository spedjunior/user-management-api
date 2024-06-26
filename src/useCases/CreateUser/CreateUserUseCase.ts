import { IUsersRepository } from '@/repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';

export class CreateUserUseCase {
   constructor(
      private usersRepository: IUsersRepository,
      private mailProvider: IMailProvider
   ) {}

   async execute(data: ICreateUserRequestDTO) {
      const userAlreadyExists = await this.usersRepository.findByEmail(
         data.email
      );
      if (userAlreadyExists) {
         throw new Error('User already exists.');
      }
      const user = new User(data.name, data.email, data.password);

      await this.usersRepository.save(user);
      console.log(`Created user ${JSON.stringify(user)}`)


      await this.mailProvider.sendMail({
         to: {
            name: data.name,
            email: data.email,
         },
         from: {
            name: 'Equipe do meu app',
            email: 'myapp@team.com',
         },
         subject: 'Seja bem-vindo à plataforma',
         body: '<p>Você já pode fazer login em nossa plataforma.</p>',
      });
   }
}
