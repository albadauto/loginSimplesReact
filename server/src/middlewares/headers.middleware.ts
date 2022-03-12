import express, { Request, Response } from "express";

const app = express();

const headerMiddleware = app.use(function(req: Request, res: Response){
   
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
})


export default headerMiddleware;