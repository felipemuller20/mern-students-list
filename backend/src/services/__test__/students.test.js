const studentServices = require('../students');
const studentMock = require('./utils/studentMocks');


describe('student service - creation', () => {
  test('Should return normalized student when created with valid input', async () => {
    const normalized = await studentServices.validateCreation(studentMock.validStudent)
    expect(normalized).toStrictEqual(studentMock.normalizedStudent)
  })

  test('Should return error if field name was not informed', async () => {
    const noName = await studentServices.validateCreation(studentMock.studentNoName);
    expect(noName.message).toBe('Field name is empty.');
  });

  test('Should return error if field address was not informed', async () => {
    const noAddress = await studentServices.validateCreation(studentMock.studentNoAddress);
    expect(noAddress.message).toBe('Address is empty');
  })
});

describe('student service - update', () => {
  test('Should return error if field name was not informed', async () => {
    const noName = await studentServices.validateUpdate(null, studentMock.studentNoName);
    expect(noName.message).toBe('Field name is empty.');
  });
  test('Should return error if id is invalid', async () => {
    const student = await studentServices.validateUpdate('1', studentMock.validStudent);
    expect(student.message).toBe('Inserted ID is invalid');
  });
})

describe('student servide - remove', () => {
  test('Should return error if id is invalid', async () => {
    const student = await studentServices.validateUpdate('1', studentMock.validStudent);
    expect(student.message).toBe('Inserted ID is invalid');
  });
})
