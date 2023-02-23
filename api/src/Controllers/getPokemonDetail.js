const axios = require('axios');
const { Pokemon, Type } = require('../db');


async function getPokemonDetailApi(id) {

    try {
        const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonApi = {
            id: pokemon.data.id,
            name: pokemon.data.forms[0].name,
            image: pokemon.data.sprites.other.home.front_default,
            hp: pokemon.data.stats[0].base_stat,
            attack: pokemon.data.stats[1].base_stat,
            defense: pokemon.data.stats[2].base_stat,
            speed: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            types: pokemon.data.types.map((e) => e.type.name)
        }
        console.log(pokemonApi);

        return pokemonApi;

    } catch (error) {
        
        return {error:error.message}
    }

}

async function getPokemonDetailDb(id) {

    try {
        const pokemonDb = await Pokemon.findByPk(id, {
            include: {
                model: Type
            }
        });

        const pokemonDbWorked = {

            id: pokemonDb.id,
            name: pokemonDb.name,
            image: pokemonDb.image,
            hp: pokemonDb.hp,
            attack: pokemonDb.atack,
            defense: pokemonDb.defense,
            speed: pokemonDb.speed,
            height: pokemonDb.height,
            weight: pokemonDb.weight,
            types: pokemonDb.types.map((e)=> e.name)

        }



        return pokemonDbWorked;
    } catch (error) {
        console.log({ error: error.message })
        return { error: error.message }
    }

}

function getPokemonDetail(api, db){


    if (Object.keys(api).length > 1) return api;
   
    if (db !== null) {
        if (!db.hasOwnProperty('error')){
            return db;
        }
        if(Object.keys(db).length > 1){
            return db;
        }
    }

     throw new Error('Pokemon Not Found');


}

module.exports = { getPokemonDetailApi, getPokemonDetailDb, getPokemonDetail }//