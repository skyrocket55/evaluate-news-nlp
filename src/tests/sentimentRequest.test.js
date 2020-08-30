var requestPost = require('../server/sentimentRequest')
var sentimentRequest = requestPost.postSentiment;

describe('Test sentimentRequest should exist' , () => {
    test('It should return true', async () => {
        expect(sentimentRequest).toBeDefined();
    });
});

describe('Test sentimentRequest should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof sentimentRequest).toBe("function");
    });
});
