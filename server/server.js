const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // frontend: 8080, backend: 3000

const server = http.createServer((req, res) => { // req: request, res: response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // text/html, text/css, text/javascript
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});