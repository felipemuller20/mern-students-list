const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const chaiHttp = require('chai-http');
const server = require('../../app');

const connect = require('../../connection/connect');

connect.connectToDatabase('mongodb://localhost:27017/StudentsListTest')

chai.use(chaiHttp);

describe('Test GET', () => {
  it('should return a list with status 200', (done) => {
    chai.request(server)
    .get('/students')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(err).to.be.null;
      done()
    })
    
  })
})
