var http = require('http');

http.createServer((req, res) =>{
    res.send('hello, http!');
}).listen(3000);

