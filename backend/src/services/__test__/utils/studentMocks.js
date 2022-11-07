const validStudent = {
  name: 'My name',
  phone: '+55(51)9 9999-999',
  address: {
    city: 'Porto Alegre',
    uf: 'RS',
    region: 'Centro',
    street: 'Andradas'
  }
}

const normalizedStudent = {
  name: 'MY NAME',
  phone: 555199999999,
  image: '',
  address: {
    city: 'PORTO ALEGRE',
    uf: 'RS',
    region: 'CENTRO',
    street: 'ANDRADAS',
  }
}

const studentNoName = {
  name: '',
  phone: '+55(51)9 9999-999',
  address: {
    city: 'Porto Alegre',
    uf: 'RS',
    region: 'Centro',
    street: 'Andradas'
  }
}

const studentNoAddress = {
  name: 'My name',
  phone: '+55(51)9 9999-999',
  address: {
    city: '',
    uf: '',
    region: '',
    street: ''
  }
}

module.exports = {
  validStudent, normalizedStudent, studentNoAddress, studentNoName
}