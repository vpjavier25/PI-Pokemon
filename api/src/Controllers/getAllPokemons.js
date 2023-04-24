const axios = require('axios');
const {Pokemon, Type} = require('../db')

//controlador para la ruta get para todos los pokemones


//creamos un controlador que busque en la api 
async function getAllPokemonsApi() {
    try {
        //trae un arreglo de objetos conn las prodpedades count, next, previous, result(name, url)
        const charactersWithUrl = await axios("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");

        //usamos promises all para resolver el array de promesas devuelto por map
        let pCharactersWithinfo = await Promise.all(charactersWithUrl.data.results.map(async(pChar)=>{
            return (
              await axios(pChar.url)
            );
        }))

        //seleccionamos la info que va a ser enviada a la page
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
        
        return pCharactersWithinfo;

    } catch (error) {
        return error;
    }
}

//creamos un controlador que busque en la db
async function getAllPokemonsDb(){

    //encuentra todos los pokemones en la db 
    const pokemonsDb = await Pokemon.findAll({
        include:{
            model:Type
        }
    });

    //trabajamos la info y selecionamos lo que se vera en la page 
     const pokemonsDbWorked = pokemonsDb.map((pokemon)=>{
        return{
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types:  pokemon.types.map((type)=> type.name)
        } 
     })
    

    return pokemonsDbWorked;
}

//creamos un controlador que seleccione los datos de la api y la db y devuelva todos lo pokemones
function getAllPokemons (api, db){
    const pokemons = [...api,...db];
    return pokemons;
}

module.exports = {
    getAllPokemonsApi, getAllPokemonsDb, getAllPokemons
}