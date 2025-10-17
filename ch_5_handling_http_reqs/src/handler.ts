import {IncomingMessage,ServerResponse} from "http";
import { URL } from "url";
import { TLSSocket } from "tls";


export const isHttps = (req:IncomingMessage) : boolean =>{
    return req.socket instanceof TLSSocket && req.socket.encrypted;
} 

export const redirectionHandler = (req:IncomingMessage , res:ServerResponse) =>{
    res.writeHead(302,{
        "Location":"https://localhost:5500"
    });
    res.end();
}

export const handler = async (req:IncomingMessage,res:ServerResponse)=>{
    const protocol = isHttps(req) ? "https" :"http";
    const parsedURL = new URL(req.url ?? "" , `${protocol}://${req.headers.host}`);

    if(req.method!=="GET" || parsedURL.pathname == '/favicon.ico'){
        res.writeHead(404,"Not found");
        res.end();
        return ;
    }
    else{
        res.writeHead(200,"OK");
        if(!parsedURL.searchParams.has("keyword")){
            res.write("Hello , HTTP");
        }
        else{
            res.write(`Hello , ${parsedURL.searchParams.get("keyword")}`);
        }
        res.end();
        return;
    }
};
// method follows to GET , POST , UPDATE , etc.



//  The four main building blocks of an HTTP request are: 
// The HTTP method, which describes the operation the client wants to perform
// The headers, which provide additional information about the request and the capabilities of the client.
//  The basic approach to generating a response is to set the status code and status message, define 
// any headers that will help the client process the response, write the data for the body – if there 
// is one – and then send the response to the client
