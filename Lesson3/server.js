const http = require('http');
// console.log(http);

// first way 
http.createServer((req, res) => {
    res.end("hello, I am your first server.")
}).listen(1000);

// second way 
http.createServer((req, res) => {
    res.end("hi!, We are your first server.")
}).listen(2000, () => {
    console.log("Server running successfully.");
})

// third way 
const port = 3000;
const myServer = http.createServer((req, res) => {
    res.end("Yah! you are server.")
});

myServer.listen(port, () => {
    console.log("Yah! Server running successfully at port " + port);
})

// fourth way
const ourPort = 4000;
const hostname = '127.0.0.1';
const ourServer = http.createServer((req, res)=> {
    res.end("<h1>Our server run happily.</h1>");
})

ourServer.listen(ourPort,()=> {
    console.log(`Our server run at http://${hostname}:${ourPort}`);
})


