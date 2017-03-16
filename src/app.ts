import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as db from "./repo/Database";
import * as Iface from "./Interface/database";

class App {
    public express: express.Application;
    public db: Iface.DatabaseInterface;
    constructor() {
    }

    async Init() {
        const d = new db.Database();
        await d.open().then(() => {
            this.express = express();
            this.middleware();
            this.routes();
            this.db = d;
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
        this.express.use(logger("dev"));
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
        router.get("/all", (req, res, next) => {
            this.db.getAll().then((r) => {
                res.send(r);
            }).catch((err) => {
                throw err;
            });
        });

        router.get("/", (req, res, next) => {
            res.send({mesasge: "Hell World!"});
        });

        router.get("/init", (req, res, next) => {
            this.db.createDemo().then(() => {
                 res.send({status: "ok"});
            });
        });

        router.get("*", function(req, res){
            res.send(404, "not found");
        });

        this.express.use("/", router);
    }
}

export default new App();