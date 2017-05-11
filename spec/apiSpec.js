process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const _ = require('underscore');

const request = require('supertest');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const saveTestData = require('../seed/test.seed');

const PORT = require('../config').PORT[process.env.NODE_ENV];

const ROOT = `http://localhost:${PORT}/api`;

require('../server');

xdescribe('API ROUTES', () => {
    let sampleIds, invalidId;

    before(done => {
        mongoose.connection.once('connected', () => {
            mongoose.connection.db.dropDatabase();
        });
        saveTestData((idObj) => {
            sampleIds = idObj;
            invalidId = sampleIds.article_id.toString().split('');
            invalidId[invalidId.length - 1] = '5345';
            invalidId = invalidId.join('');
            done();
        });
    });
    after(done => {
        mongoose.connection.db.dropDatabase(() => {
            done();
        });
    });
    describe('GET /api', () => {
        it('should return the status is OK', (done) => {
            request(ROOT)
                .get('/')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body).to.eql({ status: 'OKK' });
                    expect(response.body.status).to.equal('OKK');
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
    describe('GET /api/articles', () => {
        it('should return the articles', (done) => {
            request(ROOT)
                .get('/articles')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body.articles.length).to.equal(2);
                    done();
                });
        });
    });
    describe('GET /api/users', () => {
        it('should return the users', (done) => {
            request(ROOT)
                .get('/users')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body.users.length).to.equal(1);
                    expect(response.body.users[0].username).to.equal('northcoder');
                    done();
                });
        });
    });
    describe('GET /api/somethingwrong', () => {
        it('should return error 404, not found', (done) => {
            request(ROOT)
                .get('/wrong-request')
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(404);
                    expect(response.body).to.eql({ reason: 'ROUTE NOT FOUND' });
                    done();
                });
        });
    });
    describe('GET /api/articles/:article_id/comments', () => {
        it('should return the comments of an article', (done) => {
            const articleId = sampleIds.article_id;
            request(ROOT)
                .get(`/articles/${articleId}/comments`)
                .end((error, response) => {
                    if (error) throw error;
                    expect(response.statusCode).to.equal(200);
                    expect(response.body.comments.length).to.equal(2);
                    done();
                });
        });
    });
});