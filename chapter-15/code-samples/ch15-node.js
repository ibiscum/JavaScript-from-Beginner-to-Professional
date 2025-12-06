import { createServer } from 'http';

createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //header status code
    let name = 'maaike';
    res.write(`Finally, hello ${name}`); //body
    res.end();
}).listen(8080); //listen to port 8080

console.log('Listening on port 8080...');
