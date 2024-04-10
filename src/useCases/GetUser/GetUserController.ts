import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
   constructor(private getUserUseCase: GetUserUseCase) {}

   async handle(request: Request, response: Response): Promise<Response> {
      const { id, email } = request.body;
      if (!id && !email) {
         return response
            .status(400)
            .json({ error: 'ID or Email is required to get user data' });
      }

      console.log('fui parar aqui');

      try {
         const user = await this.getUserUseCase.execute({
            id: id as string,
            email: email as string,
         });

         if (!user) {
            return response.status(404).json({ message: 'User not found' });
         }
         return response.status(200).json(user);
      } catch (error) {
         if (error instanceof Error) {
            return response.status(400).json({ error: error.message });
         }
         return response
            .status(400)
            .json({ error: 'An error occurred while getting user data' });
      }
   }
}
