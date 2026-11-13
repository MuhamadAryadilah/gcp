const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({status: 'ok', service: 'belajar-gcp', path: req.url}));
}).listen(port, () => console.log('listening on ' + port));
