const http=require('http');
var server=http.createServer(
    (request,response)=>{
        response.end('Hello Node.js World.');
    }
);
server.listen(3000);