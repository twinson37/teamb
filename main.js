var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;

    if(pathname === '/'){
        fs.readFile('./index.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
        
    }else if(pathname === '/board'){
        fs.readFile('./board.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }else{
        console.log(pathname);
    }
    
 });
app.listen(3000, function(){ 
    console.log('Server is running...');
});