import { Router } from 'express';
import mainController from '../controllers/main.controller';
const mainRouter = Router();


mainRouter.get('/', mainController.index)



export default mainRouter;