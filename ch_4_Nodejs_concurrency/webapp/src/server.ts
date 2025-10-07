import { createServer } from "http";
import {handler} from "./handler";

const port = 5000;
const server = createServer();

server.on("request",(req,res)=>{
    if(req.url?.endsWith("favicon.ico")){
        res.statusCode=404;
        res.end();
    }else{
        handler(req,res);
    }
});

server.listen(port);

server.on("listening",()=>{
    console.log(`(Event) Server listening  on port ${port}`);
});

// server.off("request",handler);

//  Name
//  on(event, callback)
//  off(event, callback)
//  Description
//  This method registers a callback to be invoked whenever the 
// specified event is emitted. 
// This method stops invoking the callback when the specific 
// event is emitted.
//  once(event, callback)
//  This method registers a callback to be invoked the next time the 
// specified event is emitted but not thereafter.