const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestPost = require('./sentimentRequest');

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// Post for article analysis
app.post('/sentiment', requestPost.postSentiment);

module.exports = app;
