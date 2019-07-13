const http = require('http');
const fs = require('fs');

// const sampleTwitter = './tweets.json';
const userMessages = './userMessages.json';

function doOnRequest(request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    response.setHeader('Access-Control-Max-Age', 2592000);

    if (request.method === 'GET' && request.url === '/') {
        console.log('test get /');

    } else if (request.method === 'GET' && request.url === '/getUserMessages') {
        let res = fs.readFileSync(userMessages);
        response.end(res);

    } else if (request.method === 'POST' && request.url === '/addNewMessage') {
        // accumulate the request body in a series of chunks
        // code here...
        let body = '';

        request.on('data', chunk => {
            if (chunk.toString() === 'hello') {
                body = 'hello there!\n';
            } else if (chunk.toString() === 'what\'s up') {
                body = 'What\'s up brother \n';
            }
        });
        request.on('end', () => {
            fs.appendFileSync('./userMessages.json', body);
            response.end(body);
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