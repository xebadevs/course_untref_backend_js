const http = require('http');

const PORT = 300;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain; charset=utf8"});
    res.end("Hola Sungo");
})

server.listen(PORT, HOST, () => console.log(`Ejecutándose en http://${HOST}:${PORT}`));

