const dotenv = require('dotenv').config();

function postSentiment(req, res) {

    request = req.body.text;
    try {
        var regex = /[.*+\-?^${}()|[\]\\]/g;
        var replaced = request.search(regex) >= 0;
        if (replaced) {
            request = request.replace(regex, '');
        }
    } catch (error) {
        console.log('Please input valid text');
    }

    request = request.replace(/\s/g, '+');

    const https = require('follow-redirects').https;
    
    // https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools/2.1
    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${dotenv.parsed['process.env.API_KEY']}&lang=en&txt=${request}&model=general&txtf=plain`,
        'headers': {
            'Content-Type': 'application/json'
        },
        'maxRedirects': 20
    };

    var apiReq = https.request(options, function (response) {
        var chunks = [];

        response.on("data", function (chunk) {
            chunks.push(chunk);
        });

        response.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            res.send(body.toString());
            // console.log('API response: ', body.toString());
        });

        response.on("error", function (error) {
            console.error(error);
        });
    });

    apiReq.end();
}

exports.postSentiment = postSentiment;
