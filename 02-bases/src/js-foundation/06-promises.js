const { httpClient } = require('../plugins/http-client.plugin')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);

//    return fetch(url)
//     .then((response) => response.json())
//     // .then (() => {throw new Error('Pokemon no existe')})
//     .then((pokemon) => pokemon.name)

// const response = await fetch(url);
// const pokemon = await response.json();

// throw new Error('Pokemon no existe');
return pokemon.name;

}




module.exports = getPokemonById;