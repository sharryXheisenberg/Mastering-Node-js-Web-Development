import {createServer} from "http";
import { handler , redirectionHandler } from "./handler";
import {createServer as createHttpsServer} from "https";
import { readFile , readFileSync } from "fs";


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

const httpsServer = createHttpsServer(httpsConfig,handler);

httpsServer.listen(https_port,()=>console.log(`Https server is listening on port ${https_port}`));











