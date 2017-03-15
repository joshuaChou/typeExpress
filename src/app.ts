import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as database from './repo/db';

export  class App {
    public express: express.Application;
    public db: database.IDB;
    constructor() {
    }

    async Init(){
         const d = new database.db();
        await d.open().then(() => {
            this.express = express();
            this.middleware();
            this.routes();
            this.db = d;

           // this.db.createDemo();
        });

        return this;
    }

    /**
     * 
     * 
     * @private
     * 
     * @memberOf App
     */
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    /**
     * 
     * 
     * @private
     * 
     * @memberOf App
     */
    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            this.db.getAll().then((r)=>{
                res.send(r);
            }).catch((err)=>{
                throw err;
            });
        });
        this.express.use('/', router);
    }
}



//export default new App().express;