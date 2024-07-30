var http= require('http');
var myserver= require('./route.js'); 
var server= http.createServer(function (req, res){
    if (req.url=='/'){
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write(`<html><body><h1>Welcome to my Node.js Application</h1><p>${myserver.about('Welcome Jose Reyes, this is an activity about basic Node.js')}</p></body></html>`);
        res.end();
    }
    else if (req.url=='/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body><h1>This is the About Page</h1><p>${myserver.about('Hello Jose Reyes. This activity will teach you on how to deal with a simple server and local modules on Node.js ')}</p></body></html>`); 
        res.end();
    }
    else if (req.url=='/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body><h1>This is the Contact Page</h1><p>${myserver.contact('Jose Reyes, if you want additional details about this activity go to this page.')}</p></body></html>`);
        res.end();
    }
    else if (req.url=='/gallery'){
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is the Gallery Page</h1></body></html>');
        res.end();
    }
    else{
        res.writeHead(404,{ 'Content-Type': 'text/plain' });
        res.end("Invalid Request!");
    }
});
server.listen(4000, function() {
    console.log('Running on port 4000');
});
