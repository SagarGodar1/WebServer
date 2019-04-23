const http = require('http')
function httpHandler(request, response){
    let content = ''
    request.setEnoding('utf-8');
    request.on('data',chunk => {
        content += chunk;
    })
    request.on('end',() => {
        response.end(content);
    })
    const server = http.createServer(httpHandler);
server.listen(4000,(err) => {
    console.log('server is listening on $(4000)');
})
}
