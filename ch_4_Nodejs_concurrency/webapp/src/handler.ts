import {IncomingMessage} from "http";
import { ServerResponse } from "http";


export const handler = (req:IncomingMessage , res:ServerResponse)=>{
    res.end(`Hello world!`);
}