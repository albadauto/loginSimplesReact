import { Request, Response } from "express";


class MainController {

    public index(req: Request, res: Response): void {
        res.json({
            nome: 'JOSE',
            sobrenome: 'Adauto'
        })
    }

}

export default new MainController();