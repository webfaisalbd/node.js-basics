const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {

    const handleReadFile = (fileLocation, statusCode) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }

    if (req.url === '/') {
        handleReadFile('./views/index.html', 200);
    }
    else if (req.url === '/contact') {
        handleReadFile('./views/contact.html', 200);
    }
    else if (req.url === '/about') {
        handleReadFile('./views/about.html', 200);
    }
    else {
        handleReadFile('./views/error.html', 200);
    }
})

server.listen(port, hostName, () => {
    console.log(`Server is running at  http://${hostName}:${port}`);
})