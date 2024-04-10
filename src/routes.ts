import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { deleteUserController } from './useCases/DeleteUser';
import { getUserController } from './useCases/GetUser';

const router = Router();

router.get('/', (request, response) => {
   return response.json({ message: 'Hello World - NLW04' });
});

router.get('/users', (request, response) => {
   return getUserController.handle(request, response);
});

router.post('/users', (request, response) => {
   return createUserController.handle(request, response);
});

router.delete('/users', (request, response) => {
   return deleteUserController.handle(request, response);
});

export { router };
