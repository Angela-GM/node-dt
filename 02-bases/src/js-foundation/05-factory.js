// Un Factory Function es una funcion que crea una funcion
const { v4: uuid } = require('uuid');
const getAge = require('get-age')



const buildPerson = ( {name, birthdate}) => {
    
    
    return  {
        id: uuid(),
        name,
        birthdate,
        age: getAge(birthdate),
    }
    
}
const obj = {name: 'John', birthdate: '1982-12-01'}
const john = buildPerson(obj)
console.log('JOHN', john)

module.exports = {
    buildPerson
}
