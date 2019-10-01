const http = require('http');
const axios = require('axios').default;

// http.createServer(function (request, response) {
//
//   axios.get('http://localhost:8893/')
//     .then(response2 => {
//       console.log('response2 ', response2.data);
//       response.write(response2.data.toString());
//       response.writeHead(200, {'Content-type': 'text/plain'});
//     })
//     .catch(error => {
//       console.log('error ', error);
//       response.write('Service2 responded with error ', error);
//       response.writeHead(500, {'Content-type': 'text/plain'});
//     })
//     .finally(() => {
//       console.log('end ');
//       response.end();
//       return response;
//     });
// }).listen(8001);

http.createServer(function (request, response) {
  let options = {
      host: 'localhost',
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
