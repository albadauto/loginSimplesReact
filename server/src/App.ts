import express, { Request, Response } from 'express';
import mainRouter from './routes/main.route';
import cors from 'cors';
import mongoose from 'mongoose';


export class App {
    private express: express.Application;
    private port = 8080;

    constructor() {
        this.express = express();
        this.listen();
        this.routes();
        this.middlewares();
        this.database();
    }

    public getApp(): express.Application {
        return this.express;
    }


    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors({origin: '*'}));
        
    }

 

    private routes(): void {

        this.express.use('/main', mainRouter)

    }

    private async database(): Promise<void> {
        try {
            await mongoose.connect('mongodb://localhost/sisteminha');
            console.log("Banco de dados conectado!");
        } catch (err) {
            console.log(err)
        }
    }

    private listen(): void {
        this.express.listen(this.port, () => console.log("API Rodando"));
    }
}