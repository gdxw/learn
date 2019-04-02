var http = require('https');
var fs = require("fs");

const options = {
    key: fs.readFileSync(__dirname + '/bin/sslkey/213993403920857.key'),
    cert: fs.readFileSync(__dirname + '/bin/sslkey/213993403920857.pem')
}

https.createServer(options,(req, res) =>{
    res.send('hello, http2!');
}).listen(3000);
