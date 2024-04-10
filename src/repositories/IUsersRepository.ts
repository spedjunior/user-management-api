import { User } from '../entities/User';

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    save(user: User): Promise<void>;
    deleteUserByEmail(email: string): Promise<void>;
}