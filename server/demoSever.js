var http = require('http');

const PORT = 8080;

function requestHandler(req, res ) {

  res.end("it's alive " + req.url)

}

var server = http.createServer(requestHandler);

server.listen(PORT, function() {
  console.log('Server up and running on port ' , PORT )
})
