const http = require('http');
const fs = require('fs');
//const Buffer = require('buffer/').Buffer;
const userMessages = './userMessages.json';
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 1994 })

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
                console.log('readystate', client.readyState);
            }
        });
    });
    ws.on('close', () => {
        console.log('server conn closed');
        setTimeout(() => {
            console.log('closed by server console. log');
        }, 2000);
    })
});

function doOnRequest(request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', 2592000);

    if (request.method === 'GET' && request.url === '/') {
        //console.log('test get /');

    } else if (request.method === 'GET' && request.url === '/getUserMessages') {
        let res = fs.readFileSync(userMessages);
        response.end(res);

    } else if (request.method === 'OPTIONS') {
        let body = 'test';
        request.on('data', () => {
            //console.log('data');
        })
        request.on('end', () => {
            response.end(body);
        });

    } else if (request.method === 'POST' && request.url === '/addNewMessage') {
        let body = [];
        request.on('data', chunk => {
            body.push(chunk);
        });
        request.on('end', () => {
            let oldData = fs.readFileSync(userMessages);
            let oldMessages = JSON.parse(oldData);
            let newMsg = JSON.parse(body);
            oldMessages.messages.push(newMsg);
            let newJson = JSON.stringify(oldMessages);

            fs.writeFile(userMessages, newJson, (err) => {
                if (err) throw err;
            });

            response.end();
        });

    } else {
        // Handle 404 error: page not found
        response.statusCode = 404;
        response.statusMessage = `Error: Not Found brother`;
        response.end(response.statusMessage);

    }
}

const server = http.createServer(doOnRequest)
server.listen(3001);