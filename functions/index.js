
const functions = require('firebase-functions');
const express = require('express');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const cors = require('cors');
const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


const app = express();
app.use(cors(corsOptions));

app.get('/timestamp', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(`${Date.now()}`);

})

app.get('/timestamp-cached', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(`${Date.now()}`);
})

exports.app = functions.https.onRequest(app);
