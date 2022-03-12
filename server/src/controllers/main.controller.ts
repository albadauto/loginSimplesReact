import { Request, Response } from "express";
import userModel from "../models/user.model";;

class MainController {

    public async index(req: Request, res: Response): Promise<void> {
        res.header("Access-Control-Allow-Origin", "*");

        await userModel.create({
            nome: req.params.nome,
            sobrenome: req.params.sobrenome,
            cpf: req.params.cpf
        })

        res.json({
            nome: req.params.nome,
            sobrenome: req.params.sobrenome,
            cpf: req.params.cpf
        })
    }

}

export default new MainController();