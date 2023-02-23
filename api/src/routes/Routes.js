const { Router } = require('express');
const { getAllPokemonsApi, getAllPokemonsDb, getAllPokemons } = require('../Controllers/getAllPokemons');
const { getPokemonDetailApi, getPokemonDetailDb, getPokemonDetail } = require('../Controllers/getPokemonDetail');
const { getPokemonByNameApi, getPokemonByNameDb, getPokemonByName} = require('../Controllers/getPokemonByName');
const { getTypes } = require('../Controllers/getPokemonTypes');
const {createNewPokemon} = require('../Controllers/postNewPokemon');
const router = Router();

// establecemos rutas
// ruta para traer todos lo personajes
router.get('/pokemons', async (req, res) => {//obtiene todos los pokemones o el que le es pasado por query

    try {
        let { name } = req.query;

        if (name) {

            const pokemonByNameApi = await getPokemonByNameApi(name);
            const pokemonByNameDb = await getPokemonByNameDb(name);
            const pokemonByName = getPokemonByName(pokemonByNameApi, pokemonByNameDb);
            return res.status(200).json(pokemonByName);
        } else {
            const allPokemonsApi = await getAllPokemonsApi();
            const allPokemonsDb = await getAllPokemonsDb();
            const allPokemons = getAllPokemons (allPokemonsApi, allPokemonsDb)
            return res.status(200).json(allPokemons);
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }
});

router.get('/pokemons/:id', async (req, res) => {//pasado un id obtiene el pokemon correspondiente
    try {
        const id = req.params.id;
        const pokemonDetailApi = await getPokemonDetailApi(id);
        const pokemonDetailDb = await getPokemonDetailDb(id);
        const pokemonDetail = getPokemonDetail(pokemonDetailApi, pokemonDetailDb);

        return res.status(200).json(pokemonDetail);

    } catch (error) {
        return res.status(400).json(error.message);
    }
});

router.get('/types', async(req, res)=>{// obtiene los tipos de poquemon 
    try {
        const types = await getTypes();
        res.status(200).json(types);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

router.post('/pokemons', async (req, res) => {//crea nuevos poquemones en la base de datos
    try {
        const { body } = req;
        const newPokemons = await createNewPokemon(body);
        return res.status(200).json(newPokemons);
    } catch (error) {
        return res.status(400).json(error.message)
    }

});


module.exports = router;
