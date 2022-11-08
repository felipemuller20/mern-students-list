// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const connection = require('../../connection/connect');

// chai.use(chaiHttp);
// const { expect } = chai;

// const app = require('../../routers/student.router');

// describe('Usando o método GET em /students', () => {
//   it('Retorna a lista de alunos', async () => {
//     await connection.connectToDatabase();

//     const response = await chai.request(app).get('/students');

//     expect(response.status).to.be.equal(200);
//     expect(response.body).to.be.instanceOf(Array);
//   })
// })

const chai = require('chai');
const expect = chai.expect;

describe('First test', () => {
  it('should test', () => {
    
  })
})
