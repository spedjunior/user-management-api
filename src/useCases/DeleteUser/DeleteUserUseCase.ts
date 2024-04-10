import { IUsersRepository } from '@/repositories/IUsersRepository';
import { IMailProvider } from '../../providers/IMailProvider';
import { IDeleteUserRequestDTO } from './DeleteUserDTO';


export class DeleteUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data: IDeleteUserRequestDTO['email'] ) {
        console.log(data)
        const userAlreadyExists =  await this.userRepository.findByEmail(data)
        console.log(`Objeto: { ${ JSON.stringify(userAlreadyExists)} }`)
        if (!userAlreadyExists){
            throw new Error('User does not exist')
        }
        //await this.userRepository.deleteUserByEmail(data.email)
        console.log(`Delete account ${JSON.stringify(data)}`)

        await this.mailProvider.sendMail({
            to: {
                name: userAlreadyExists.name,
                email: userAlreadyExists.email
            },
            from: {
                name: 'Equipe do meu app',
                email: 'myapp@team.com',
            },
            subject: "Conta Excluída",
            body: "<p>Conta de Usuário Excluída<p>",
        })
    }

    
}