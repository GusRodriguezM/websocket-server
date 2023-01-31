import * as dotenv from 'dotenv';
dotenv.config();
import Server from "./models/server.js";

//Instance of the class server
const server = new Server();

server.listen();
