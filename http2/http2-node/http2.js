const http = require('http2') // 若为http2则把'https'模块改为'spdy'模块
const fs = require('fs');

const options = {
    key: fs.readFileSync('../sslkey/213993403920857.key'),
    cert: fs.readFileSync('../sslkey/213993403920857.pem')
}

http.createServer(options, (req, res) => {
    var buf = new Buffer(2 * 1024 * 1024);
    res.send(buf.toString('utf8'));
}).listen(1010, (err) => {
    if (err) throw new Error(err)
    console.log('Http1.x server listening on port 1001.')
});