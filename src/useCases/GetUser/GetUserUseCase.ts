import { IUsersRepository } from '@/repositories/IUsersRepository';
import { User } from '../../entities/User';
import { IGetUserRequestDTO } from './GetUserDTO';

export class GetUserUseCase {
   constructor(private usersRepository: IUsersRepository) {}

   async execute(data: IGetUserRequestDTO): Promise<User | undefined> {
      try {
         if (data.id) {
            const user = await this.usersRepository.findById(data.id);
            return user;
         } else if (data.email) {
            const user = await this.usersRepository.findByEmail(data.email);
            return user;
         }
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message);
         }
         throw new Error('Error getting user data.');
      }
   }
}
