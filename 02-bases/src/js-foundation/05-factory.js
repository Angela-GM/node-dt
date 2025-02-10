// Un Factory Function es una funcion que crea una funcion
// const { getUuid, getAge } = require('../plugins');


const buildMakePerson = ({getUuid, getAge}) => {
    
    return ( {name, birthdate}) => {    
    
        return  {
            id: getUuid(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
        
    }
}

// const obj = {name: 'John', birthdate: '1982-12-01'}
// const john = buildPerson(obj)
// console.log('JOHN', john)

module.exports = {
    buildMakePerson
}
