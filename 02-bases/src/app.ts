// const {emailTemplate} = require('./js-foundation/01-template');
// const { getUserById } = require('./js-foundation/04-arrow');
// require('./js-foundation/02-destructuring')
// const {getUserById} = require('./js-foundation/04-arrow')

import { buildLogger } from "./plugins/logger.plugin";


const logger = buildLogger('app.js');

logger.log('Hello world')
logger.error('Esto es algo malo')

// const getPokemonById = require('./js-foundation/06-promises')

// getPokemonById(10)
// .then((pokemon) => console.log({pokemon}))
// .catch((error) => console.error(error))
// .finally (() => console.log('Finalmente'))




// token de acceso
// Públicas







// !Factory functions y uso
// const { getUuid, getAge } = require('../src/plugins');

// const {buildMakePerson} = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson( {getUuid, getAge})


// const obj = {name: 'John', birthdate: '1982-12-01'}

// const john = makePerson(obj)

// console.log({john})



// import { emailTemplate } from './js-foundation/01-template'

// console.log(templateExports.emailTemplate)
// console.log(emailTemplate);

// const id = 2;


// getUserById(1, (error, user) => {
// getUserById(id,  (error, user) => {
//   if (error) {
//         throw new Error( error)
//     }
//     console.log({user})

// })

// const person = buildPerson({name:'Angela', birthdate:'1982-12-01'})

// console.log(person)

