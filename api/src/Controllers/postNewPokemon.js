const { Pokemon } = require('../db');

async function createNewPokemon(body) {

    const newPokemon = await Pokemon.create(body);

    await newPokemon.addType(body.types);

    return "personaje creado con exito";
}

module.exports = {
    createNewPokemon
}