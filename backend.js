const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

const home = fs.readFileSync('./indexmain.html')
const about = fs.readFileSync('./about.html')
const services= fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    if (req.url == '/') {
        res.end(home);
    }
    else if (req.url == '/about') {
        res.end(about);
    }
    else if (req.url == '/services') {
        res.end(services);
    }
    else if (req.url == '/contact') {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end('404 not found');
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})