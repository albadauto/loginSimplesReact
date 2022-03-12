import express, { Request, Response } from 'express';
import mainRouter from './routes/main.route';
import cors from 'cors';


export class App {
    private express: express.Application;
    private port = 8080;

    constructor() {
        this.express = express();
        this.listen();
        this.routes();
        this.middlewares();
    }

    public getApp(): express.Application {
        return this.express;
    }


    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(function (req: Request, res: Response) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept"); 

        })
    }

    private routes(): void {
        this.express.use('/main', mainRouter)
        
    }




    private listen(): void {
        this.express.listen(this.port, () => console.log("Rodando"));
    }
}