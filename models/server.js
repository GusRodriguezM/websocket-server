import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

class ServerSocket {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer( this.app );
        this.io = new Server( this.server );

        this.paths = {}

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();

        //Sockets events
        this.sockets();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Public folder
        this.app.use( express.static('public') );

    }

    //App routes
    routes() {}

    //Sockets
    sockets() {
        //this.io references the server of the sockets
        this.io.on( 'connection', socket => {
            console.log('Client connected...', socket.id);

            socket.on( 'disconnect', () => {
                console.log('Client disconnected...', socket.id);
            });

            /**
             * This listens when a client emits a message and the callback is the things we want to do when the client emits the message
             * The first arg of the callback is the payload
             */
            socket.on( 'send-message', ( payload ) => {

                // console.log('Message from the "client" received: ', payload);

                //Sending a message to all the connected clients
                this.io.emit( 'send-message', payload );

            });
        });
    }

    //Port where the app will run
    listen() {
        this.server.listen(this.port, () => {
            console.log(`The server is up and listening on port, ${this.port}`);
        });
    }

}

export default ServerSocket;