const request = require('supertest');
const app = require('../server/app');

describe('Testing the routes', () => {
    test('GET method response', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});




