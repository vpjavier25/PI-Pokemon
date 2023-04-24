const { Pokemon } = require('../db');

async function createNewPokemon(body) {

    try {
        const newPokemon = await Pokemon.create(body);//crea un pokeon en la db pasandole el objeto que se crea en el form 

        await newPokemon.addType(body.types);   // se relaciona pokemons con tipes a travex del metodo creado por sequelize cuando se establecieron las relaciones. Se le pasa un arreglo con los id de los tipos

        return "personaje creado con exito"; // devuelve el mensaje si se creo con exito 

    } catch (error) {
        return error.message  // la propiedad mensaje del objeto error
    }

}

module.exports = {
    createNewPokemon
}