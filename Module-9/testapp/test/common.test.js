// import chai from "chai"
// import { expect, use, should } from "chai";
// import chaiHttp from "chai-http";
// import { describe, it } from 'mocha';

let chai = require("chai");
let chaiHttp = require("chai-http")
let expect = chai.expect;
chai.use(chaiHttp)

describe('Testing my Rest Api', () => {
    it('should return status 200 for /', function (done) {
        chai.request("http://localhost:6500")
            .get("/")
            .then(function (res) {
                expect(res).to.have.status(200);
                done();
            })
            .catch(function (err) {
                throw (err)
            })
    })

    let movieId;
    before((done) => {
        chai.request('http://localhost:6500')
            .get("/movies")
            .then(function (res) {
                expect(res).to.have.status(200)
                movieId = res.body[0]._id;
                done()
            })
            .catch(function (err) {
                throw (err)
            })
    })

    it('should return movies by id', function (done) {
        chai.request("http://localhost:6500")
            .get(`/movies/${movieId}`)
            .then(function (res) {
                expect(res).to.have.status(200);
                done();
            })
            .catch(function (err) {
                throw (err)
            })
    })

})