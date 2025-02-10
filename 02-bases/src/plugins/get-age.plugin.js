const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
    if (!birthdate) return new Error('Birthdate is required')

    return getAgePlugin(birthdate)
    // return 'No hay fecha'

}


module.exports =  {
    getAge
 
}