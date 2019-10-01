const http = require('http');

http.createServer(function (request, response) {
  let options = {
      host: 'service2',
      port: 8893,
      method: 'GET',
      path: '/'
  };

  response.write("Hello from " + request.client.remoteAddress + " port " + request.client.remotePort +
    " to " + request.client.localAddress + " port " + request.client.localPort + '\n');

  let call = http.request(options, function(res){
      res.setEncoding('utf8');
      res.on('data', function(chunk){
          response.write(chunk);
      });
      res.on('end', function(){
        response.end();
      });
  }).on("error", function(e){
    response.write("Error connecting to Service2");
    response.end();
  });

  call.end();
}).listen(8001);
