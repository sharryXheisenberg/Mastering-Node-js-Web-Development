import {createServer} from "http";
import { redirectionHandler , newUrlHandler , defaultHandler , notFoundHandler } from "./handler";
import {createServer as createHttpsServer} from "https";
import { readFile , readFileSync } from "fs";
import express , {Express} from "express";


const port = 5000;

const https_port = 5500;
const server = createServer(redirectionHandler);

// // server.on("request",handler);
// server.listen(port);
server.listen(port,()=>{
    console.log(`(event) listening on server ${port}`);
});

const httpsConfig =  {
    key : readFileSync("key.pem"),
    cert : readFileSync("cert.pem")
};

const expressApp : Express = express();
expressApp.get("/favicon.ico", notFoundHandler); // creates the route 
expressApp.get("/newurl",newUrlHandler);
expressApp.get("*",defaultHandler);

const httpsServer = createHttpsServer(httpsConfig,expressApp);

httpsServer.listen(https_port,()=>console.log(`Https server is listening on port ${https_port}`));











