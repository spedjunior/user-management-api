import { Request, Response } from 'express';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {

    constructor( private deleteUserUseCase: DeleteUserUseCase){}

    async handle(request: Request, response: Response ) {
        const { email } =  request.body;

        try {
        await this.deleteUserUseCase.execute(email);
        return response.status(201).send()
        } catch (err) { 
            if(err instanceof Error)
            return response.status(400).json({
               message: err.message || 'Unexpected error.',
            });
            else {
               return response.status(400).json({
                  message: 'Unexpected error.',
               });
            }
         }
    }
}