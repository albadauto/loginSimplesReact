import { Request, Response } from "express";
import userModel from "../models/user.model";;

class MainController {

    public async index(req: Request, res: Response): Promise<void> {
        try{
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
        }catch(err){
            console.log(err)
        }
        
    }

    public async allUsers(req: Request, res: Response): Promise<void>{
        try{
            res.header("Access-Control-Allow-Origin", "*");

            const result = await userModel.find({});
            var obj = [];
            
            res.json(result);
        }catch(err){
            console.log(err)
        }
    }

}

export default new MainController();