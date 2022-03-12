import { Router } from 'express';
import mainController from '../controllers/main.controller';
const mainRouter = Router();


mainRouter.get('/insert/:nome/:sobrenome/:cpf', mainController.index)



export default mainRouter;