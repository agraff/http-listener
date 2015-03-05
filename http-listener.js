var http = require('http');

var port=process.argv[2] || 8888;
var address=process.argv[3] || "127.0.0.1";

var server = http.createServer(function (request, response) {
  console.log("REQUEST");
  console.log("   url: " + request.method + " " + request.url);
  request.on("data", function(chunk) {
    console.log("   body: " + chunk);
  });

  response.writeHead(200);
  response.end();
});

server.listen(port, address);

console.log("Server running at http://" + address + ":" + port +"/");