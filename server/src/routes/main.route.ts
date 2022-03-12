import { Router } from 'express';
import mainController from '../controllers/main.controller';
import headerMiddleware from '../middlewares/headers.middleware';
const mainRouter = Router();


mainRouter.get('/insert/:nome/:sobrenome/:cpf', mainController.index)

mainRouter.get('/allUsers', mainController.allUsers);



export default mainRouter;