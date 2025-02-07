const {emailTemplate} = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring')
const {getUserById} = require('./js-foundation/03-callbacks')


// import { emailTemplate } from './js-foundation/01-template'

// console.log(templateExports.emailTemplate)
// console.log(emailTemplate);

const id = 3;


// getUserById(1, (error, user) => {
getUserById(id, function (error, user) {
  if (error) {
        throw new Error( error)

    }
    console.log({user})

})