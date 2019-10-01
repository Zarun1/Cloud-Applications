const http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end("Hello from " + request.client.remoteAddress + " port " + request.client.remotePort +
    " to " + request.client.localAddress + " port " + request.client.localPort);
}).listen(8893);
