var http = require("http");

http.createServer((req, res)=>{
    console.log(req.headers["user-agent"]);
    res.end("hello word");
}).listen(3001);