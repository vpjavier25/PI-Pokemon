const { Pokemon } = require('../db');

async function createNewPokemon(body) {

    try {
        const newPokemon = await Pokemon.create(body);

        await newPokemon.addType(body.types);

        return "personaje creado con exito";

    } catch (error) {
        return error.message
    }

}

module.exports = {
    createNewPokemon
}