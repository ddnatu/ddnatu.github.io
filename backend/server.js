const http = require('http');
const fs = require('fs');
const Buffer = require('buffer/').Buffer;

// const sampleTwitter = './tweets.json';
const userMessages = './userMessages.json';

function doOnRequest(request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', 2592000);
    console.log('requyest methon', request.method, request.url);
    if (request.method === 'GET' && request.url === '/') {
        console.log('test get /');

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
            var x = Buffer.concat(body).toString();
            oldMessages.messages.push(JSON.parse(x));
            let newJson = JSON.stringify(oldMessages);
            fs.writeFileSync(userMessages, newJson);

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