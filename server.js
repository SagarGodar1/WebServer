const http = require('http');
const serverhandler = (request, response) => {
let content = " ";
request.on("data",(data) => content += data)
request.on("end"),() => response.end(content)
}
const server = createServer(serverhandler);
server.listen(3000,(err) => {
    console.log('server listening to port 3000');
})