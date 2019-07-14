var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;
var app = http.createServer(function(request, response){
    var url = request.url;
    
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end('hello world!, your url : '+ url);

});
app.listen(port);
