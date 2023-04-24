const axios = require('axios');
const { Pokemon, Type } = require('../db');

async function getPokemonByNameApi(name) {
    try {
        name = name.toLowerCase();  
        // pasamos el string pasado a minusculas
        const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);       
        //objeto debuelto de la api 
        const pokemonApi = {                
            //objeto para manejar la info necesaria
            id: pokemon.data.id,
            name: pokemon.data.forms[0].name,
            image: pokemon.data.sprites.other.home.front_default,
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            types: pokemon.data.types.map((e)=> e.type.name)
        }

        return pokemonApi;

    } catch (error) {

        return { error: error.message }
    }
}

async function getPokemonByNameDb(name) {
    
    name = name.toLowerCase();

    try {
        const pokemonDb = await Pokemon.findAll({
            // obtenemos pokemones de la db que coincidadn con el nombre pasado por query, es un arreglo de objetos
            where: {
                name
            },

            include: {
                model: Type
            }
        });
        
        const pokemonDbWorked = {

            id: pokemonDb[0].id,
            name: pokemonDb[0].name,
            image: pokemonDb[0].image,
            hp: pokemonDb[0].hp,
            attack: pokemonDb[0].attack,
            defense: pokemonDb[0].defense,
            speed: pokemonDb[0].speed,
            height: pokemonDb[0].height,
            weight: pokemonDb[0].weight,
            types: pokemonDb[0].types.map((e)=> e.name)

        }
        console.log(pokemonDbWorked);

        return pokemonDbWorked;

    } catch (error) {
        return [{ error: error.message }]
    }

}

function getPokemonByName(api, db) { 
    // selecciona la respuesta que contenga la informacion necesitdad, esto debido a que los pokemones que estan en la db no esta en la api

    if (Object.keys(api).length > 1) return api;

    if (Object.keys(db).length > 1) {

        return db;


    }

    throw new Error('0 matches for the search');
}

module.exports = {
    getPokemonByNameApi, getPokemonByNameDb, getPokemonByName
}//