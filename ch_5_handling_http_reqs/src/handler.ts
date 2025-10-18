import {IncomingMessage,Server,ServerResponse} from "http";
// import { URL } from "url";
// import { TLSSocket } from "tls";
import {Request , Response} from "express";


// export const isHttps = (req:IncomingMessage) : boolean =>{
//     return req.socket instanceof TLSSocket && req.socket.encrypted;
// } ;


export const redirectionHandler = (req:IncomingMessage , res:ServerResponse) =>{

    res.writeHead(302,{
        "Location":"https://localhost:5500"
    });
    res.end();
}

export const notFoundHandler = (req:Request ,res:Response) =>{
    res.sendStatus(404);
}

export const newUrlHandler = (req:Request , res:Response) =>{
    // res.writeHead(200,"OK");
    // res.write("Hello, New URL");
    // res.end();
     const msg = req.params.message?? "(No Message)";
    res.send(`Hello, ${msg}`);
}

export const defaultHandler =  (req:Request,res:Response)=>{
    // res.writeHead(200,"OK");
    // const protocol = isHttps(req) ? "https" :"http";
    // const parsedURL = new URL(req.url ?? "" , `${protocol}://${req.headers.host}`);

    if(req.query.keyword){
        res.send(`Hello, ${req.query.keyword}`);
        // res.end();
        // return ;
    }
    else{
           res.send(`Hello , ${req.protocol.toLowerCase()}`);
        }
    //    res.end();
    }

// method follows to GET , POST , UPDATE , etc.



//  The four main building blocks of an HTTP request are: 
// The HTTP method, which describes the operation the client wants to perform
// The headers, which provide additional information about the request and the capabilities of the client.
//  The basic approach to generating a response is to set the status code and status message, define 
// any headers that will help the client process the response, write the data for the body – if there 
// is one – and then send the response to the client
