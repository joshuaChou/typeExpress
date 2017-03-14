"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    /**
     *
     *
     * @private
     *
     * @memberOf App
     */
    middleware() {
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
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map