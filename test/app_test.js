const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app' , () => {
    it("handles home get request", (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'There');
                done();
            });
    });
});
