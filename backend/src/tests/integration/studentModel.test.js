require('dotenv').config();
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../../app');

const studentMock = require('../utils/mocks');
const connect = require('../../connection/connect');

connect.connectToDatabase(process.env.MONGO_TEST_URL || 'mongodb://localhost:27017/StudentsListTest')

chai.use(chaiHttp);

describe('Test GET', () => {
  it('should return an array with status 200', (done) => {
    chai.request(server)
    .get('/students')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(err).to.be.null;
    })
    chai.request(server)
    .get('/students/alphabetic-order')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(err).to.be.null;
    })
    done();
  })
})

describe('Test POST', () => {
  it('should return an object with status 201', (done) => {
    chai.request(server)
      .post('/students')
      .send(studentMock.validStudent)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('object');
        expect(err).to.be.null;
        expect(res.body.name).to.be.equal(studentMock.validStudent.name.toUpperCase());
        expect(res.body.phone).to.be.a('number')
        expect(res.body.address).to.be.a('object');
        done();
      })
  });

  it('should return an error if student is invalid', (done) => {
    chai.request(server)
      .post('/students')
      .send(studentMock.studentNoName)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.equal('Field name is empty.');
      })
    chai.request(server)
      .post('/students')
      .send(studentMock.studentNoAddress)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.equal('Address is empty')
      })
    done()
  })
});

describe('Test DELETE', () => {
  it('should return an error 404 if delete with no id', (done) => {
    chai.request(server)
      .del(`/students/`)
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  });
  it('should return an error if id is not valid', (done) => {
    chai.request(server)
    .del(`/students/1`)
    .end((err, res) => {
      expect(res).to.have.status(400)
      expect(res.body).to.be.equal('Inserted ID is invalid')
      done()
    })
  })
});

describe('Test PUT', () => {
  it('should return an error 404 if update with no id', (done) => {
    chai.request(server)
      .put(`/students/`)
      .end((err, res) => {
        expect(res).to.have.status(404)
        done()
      })
  });
  it('should return an error 400 if no body is sent', (done) => {
    chai.request(server)
      .put(`/students/1`)
      .end((err, res) => {
        expect(res).to.have.status(400)
        expect(res.body).to.be.equal('Personal data is empty')
        done()
      })
  })
  it('should return error if id is invalid', (done) => {
    chai.request(server)
    .put(`/students/1`)
    .send(studentMock.validStudent)
    .end((err, res) => {
      expect(res).to.have.status(400)
      expect(res.body).to.be.equal('Inserted ID is invalid')
      done()
    })
  })
})