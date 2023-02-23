import axios from 'axios';

export const ADDCHARACTERS = 'ADDCHARACTERS';
export const GETTYPES = 'GETTYPES';
export const SEARCHCHARACTERBYNAME = 'SEARCHCHARACTERBYNAME';
export const FILTERBYTYPES = 'FILTERBYTYPES';
export const FILTERBYSOURCE = 'FILTERBYSOURCE';
export const DIFFERENTSFORMSTOORDER = 'DIFFERENTSFORMSTOORDER';
export const CREATEANEWPOKEMON = 'CREATEANEWPOKEMON';

export function addPokemon() {
    return async function (dispatch) {
        try {
            let response = await axios('http://localhost:3001/pokemons');
            return dispatch({ type: ADDCHARACTERS, payload: response.data })
        } catch (error) {
            console.log(error)
        }

    }
}

export function getTypes(){
    return async function (dispatch){
        try {
            let res = await axios('http://localhost:3001/types');
            return dispatch({type:GETTYPES, payload:res.data});
        } catch (error) {
            console.log(error)
        }
        
    }
}

export function SearchByName(name) {
    return async function (dispatch) {

        try {
            let response = await axios(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({ type: SEARCHCHARACTERBYNAME, payload: response.data })
        } catch (error) {
            console.log(error)
        }

    }
}

export function filterbyType(types){
    return{
        type: FILTERBYTYPES,
        payload: types
    }
}

export function filterbySource(source){
    return{
        type: FILTERBYSOURCE,
        payload: source
    }
}

export function order(order){
    return{
        type: DIFFERENTSFORMSTOORDER,
        payload: order
    }
}

export function createNewPokemon(data){
    return async function (dispatch){
        try {
             let res = await axios.post('http://localhost:3001/pokemons', data);
        return (
            dispatch({type:CREATEANEWPOKEMON, payload:res.data})
        )
        } catch (error) {
            console.log(error);
        }
       
    }
}
