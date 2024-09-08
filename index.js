const http = require("http");
const fs = require("fs");

//all the data of client-side requests is stored in req object
//response from the server is sent by the object res

const myServer = http.createServer((req,res)=>{
    // console.log("New request received ");
    // console.log(req.headers);
    const log = `${Date.now()}:${req.url}: New Request Received\n`;
    fs.appendFile("log.txt",log, (err,data)=>{
        switch(req.url){
            case '/':
                res.end("Welcome to the Home Page")
                break;
            case '/about':
                res.end("About us: learning http server")
                break;
            default:
                res.end("The Page is not found :(")
        }
    })
});
// how to check ip address?

myServer.listen(8000, ()=> {
    console.log("Server running on port 8000")
});