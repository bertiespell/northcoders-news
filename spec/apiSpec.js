process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const _ = require('underscore');

const request = require('supertest');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const seed = require('../api-backend/seed/test.seed');
const PORT = require('../config').PORT[process.env.NODE_ENV];
const ROOT = `http://localhost:${PORT}/api`;

require('../api-backend/server');

before(done => {
    mongoose.connection.once('connected', () => {
        mongoose.connection.db.dropDatabase(() => {
            console.log('Dropped DB');
            seed(() => {
                done();
            });
        });
    });
});

describe('API ROUTES', () => {
    describe('GET /api', () => {
        it('should return the status is OK', (done) => {
            request(ROOT)
                .get('/')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.eql({ status: 'OK' });
                    expect(response.body.status).to.equal('OK');
                    done();
                });
        });
    });
    describe('GET /api/topics', () => {
        it('should return the topics', (done) => {
            request(ROOT)
                .get('/topics')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    const topics = response.body.topics.map(function (topic) {
                        return topic.title;
                    });
                    const football = _.contains(topics, 'Football');
                    const cooking = _.contains(topics, 'Cooking');
                    const cats = _.contains(topics, 'Cats');
                    expect(football).to.equal(true);
                    expect(cooking).to.equal(true);
                    expect(cats).to.equal(true);
                    done();
                });
        });
    });
});

