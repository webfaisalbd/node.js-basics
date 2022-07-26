const http = require("http");

const port = 3000;
const hostname = '127.0.0.1';

// 'Content':'Type':'text/plain' 
const myServer = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Hello my world");
    res.write("\n");
    res.write("Hello my world2");
    res.end();
})

myServer.listen(port,()=> {
    console.log(`My server run at http://${hostname}:${port}`);
})

// 'Content':'Type':'text/html'
const port2 = 4000;
const hostname2 = '127.0.0.1';

const ourServer = http.createServer((req,res)=> {
    res.writeHead(201,{'Content-Type':'text/html'});
    res.write('<h4>Hello, Hi<h4>');
    res.write('<h4>Hello2, Hi2<h4>');
    res.end();
});
ourServer.listen(port2,hostname2,()=> {
    console.log(`Our msg runs at http://${hostname2}:${port2}`);
})



