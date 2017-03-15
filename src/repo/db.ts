import * as rethinkdb from 'rethinkdb';
import * as bluebirth from 'bluebird';

bluebirth.promisifyAll(rethinkdb.db('typeExpress').table('products'));

export interface IDB {
    open(): Promise<void>;
    createDemo(): Promise<void>;
    getAll(): Promise<void>;
}

export class db implements IDB {
    private connection = null;
    constructor() {
    }

    async open() {
        if (!this.connection) {
            await rethinkdb.connect({ host: '192.168.99.100', port: 32784 }, (err, conn) => {
                this.connection = conn;
            })
        }
    }

    async createDemo() {
        const result = await rethinkdb.db('typeExpress').table('products').insert([
            {
                name: "William Adama", tv_show: "Battlestar Galactica",
                posts: [
                    { title: "Decommissioning speech", content: "The Cylon War is long over..." },
                    { title: "We are at war", content: "Moments ago, this ship received word..." },
                    { title: "The new Earth", content: "The discoveries of the past few days..." }
                ]
            },
            {
                name: "Laura Roslin", tv_show: "Battlestar Galactica",
                posts: [
                    { title: "The oath of office", content: "I, Laura Roslin, ..." },
                    { title: "They look like us", content: "The Cylons have the ability..." }
                ]
            },
            {
                name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
                posts: [
                    { title: "Civil rights", content: "There are some words I've known since..." }
                ]
            }
        ]).run(this.connection, (err, result) => {
            if (err) throw err
            console.log(result);
            return JSON.stringify(result, null, 2);
        });

        return result;

    }

   async getAll() {
        return new Promise<any>((reslove,reject)=>{
             rethinkdb.db('typeExpress').table('products').run(this.connection, (err, cursor) => {
                if (err) throw err
                let list= [];
                cursor.each((error,rows)=>{
                    list.push(rows);
                });
                reslove(list);
            });
        });
    }
}

