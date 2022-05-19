const http = require('node:http');

const server = http.createServer((request, response)=>{
  if (request.method === 'GET' && request.url === '/'){
    response.writeHead(200, {'Content-Type':'application/json'})
    response.end(JSON.stringify({status:'Ok'}))
  } else {
    response.end();
  }
})

server.listen(3000, () => console.log('Estou rodando!!! Porta 3000'))