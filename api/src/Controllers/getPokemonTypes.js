const axios = require('axios');
const {Type} = require('../db');


async function getTypes(){
    // const typesInfo = await axios('https://pokeapi.co/api/v2/type'); //consume los tipos de la api

    // const types = typesInfo.data.results.map((type) =>{
    //     return {
    //         name: type.name
    //     }
    // });

    // const typesDbCreate = await Type.bulkCreate(types);

    // return types;

    const typesDb = await Type.findAll(); //consume los tipos guardado en la api

    return typesDb;


}



module.exports ={
    getTypes
}