import {createServer, IncomingMessage} from "http";
import { ServerResponse } from "http";
// import { readFile } from "fs";
import { readFile } from "fs/promises";
import {endPromise,writePromise} from "./promises";


// export const handler = async (req:IncomingMessage , res:ServerResponse)=>{
//     try{
//       const data: Buffer = await readFile("data.json");
//       await endPromise.bind(res)(data);
//       console.log("File sent!");
//       //  The bind method associates the ServerResponse object for which the function is being invoked.
//     }
//     catch(err:any){
//       console.log(`Error: ${err?.message ?? err}`);
//       res.statusCode=500;
//       res.end();
//     }
// };

//  Working with promises
// promises example
// a promise in JS 

//  A promise serves the same purpose as a callback, which is to define  the code that will be executed when an asynchronous operation is completed

//  Blocking Operation 

const total = 2_000_000_000;
const iterations = 5;
let shared_counter = 0;

export const handler = async (req:IncomingMessage,res:ServerResponse) =>{
  const request = shared_counter++;

  const iterate = async (iter:number=0)=>{
    for(let count = 0;count<total;count++){
      count++;
    }
    const msg = `Request: ${request} , Iteration:${(iter)}`;
    console.log(msg);

    await writePromise.bind(res)(msg + "\n");
    if(iter == iterations -1){
      await endPromise.bind(res)("Done");
    }else{
      setImmediate(()=>iterate(++iter));
    }
  }
  iterate();
};