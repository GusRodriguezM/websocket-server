import express from 'express';
import cors from 'cors';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {}

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Reading and parsing the body
        this.app.use( express.json() );

        //Public folder
        this.app.use( express.static('public') );

    }

    //App routes
    routes() {}

    //Port where the app will run
    listen() {
        this.app.listen(this.port, () => {
            console.log(`The server is up and listening on port, ${this.port}`);
        });
    }

}

export default Server;