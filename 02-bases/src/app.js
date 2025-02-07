const {emailTemplate} = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring')
const {getUserById} = require('./js-foundation/04-arrow')


// import { emailTemplate } from './js-foundation/01-template'

// console.log(templateExports.emailTemplate)
// console.log(emailTemplate);

const id = 2;


// getUserById(1, (error, user) => {
getUserById(id,  (error, user) => {
  if (error) {
        throw new Error( error)
    }
    console.log({user})

})

