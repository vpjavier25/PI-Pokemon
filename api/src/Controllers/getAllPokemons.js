const axios = require('axios');
const {Pokemon} = require('../db')

//controlador para la ruta get para todos los pokemones

async function getAllPokemonsApi() {
    try {

        const charactersWithUrl = await axios("https://pokeapi.co/api/v2/pokemon?limit=400&offset=0");//trae un arreglo de objetos conn las prodpedades count, next, previous, result(name, url)

        let pCharactersWithinfo = await Promise.all(charactersWithUrl.data.results.map(async(pChar)=>{
            return (
              await axios(pChar.url)
            );
        }))//usamos promises all para resolver el array de promesas devuelto por map

        pCharactersWithinfo = pCharactersWithinfo.map( e => {
            return {
                id: e.data.id,
                name: e.data.forms[0].name,
                image: e.data.sprites.other.home.front_default,
                hp: e.data.stats[0].base_stat,
                attack: e.data.stats[1].base_stat,
                defense: e.data.stats[2].base_stat,
                speed: e.data.stats[5].base_stat,
                height: e.data.height,
                weight: e.data.weight,
                types: e.data.types.map((e)=>{
                    return e.type.name
                })
            }
        })
        
        //console.log(pCharactersWithinfo); lo use para ver la respuesta

        return pCharactersWithinfo;

    } catch (error) {
        return error;
    }
}

async function getAllPokemonsDb(){
    const pokemonsDb = Pokemon.findAll();

    return pokemonsDb;
}

function getAllPokemons (api, db){
    const pokemons = [...api,...db];
    return pokemons;
}

module.exports = {
    getAllPokemonsApi, getAllPokemonsDb, getAllPokemons
}