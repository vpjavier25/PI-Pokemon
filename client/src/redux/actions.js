import axios from 'axios';

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const GET_TYPES = 'GET_TYPES';
export const SEARCH_CHARACTER_BY_NAME = 'SEARCH_CHARACTER_BY_NAME';
export const SEARCH_CHARACTER_BY_NAME_ERROR = 'SEARCH_CHARACTER_BY_NAME_ERROR';
export const CLOSE_SEARCH = 'CLOSE_SEARCH';
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES';
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE';
export const DIFFERENTS_FORMS_TO_ORDER = 'DIFFERENTS_FORMS_TO_ORDER';
export const CREATE_A_NEW_POKEMON = 'CREATE_A_NEW_POKEMON';
export const UPDATE_CHARACTERS_PAGE = 'UPDATE_CHARACTER_PAGE'; 

export function addPokemon() {
    return async function (dispatch) {
        try {
            let response = await axios('http://localhost:3001/pokemons');
            return dispatch({ type: ADD_CHARACTERS, payload: response.data })
        } catch (error) {
            console.log(error)
        }

    }
}

export function getTypes(){
    return async function (dispatch){
        try {
            let res = await axios('http://localhost:3001/types');
            return dispatch({type:GET_TYPES, payload:res.data});
        } catch (error) {
            console.log(error)
        }
        
    }
}

export function SearchByName(name) {
    return async function (dispatch) {

        try {
            let response = await axios(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({ type: SEARCH_CHARACTER_BY_NAME, payload: response.data })
        } catch (error) {
            console.log(error)
            return dispatch({ type: SEARCH_CHARACTER_BY_NAME_ERROR, payload: {message :error.response.data}})
        }

    }
}

export function closeSeacrh(){
    return {
        type: CLOSE_SEARCH
    }
}

export function filterbyType(types){
    return{
        type: FILTER_BY_TYPES,
        payload: types
    }
}

export function filterbySource(source){
    return{
        type: FILTER_BY_SOURCE,
        payload: source
    }
}

export function order(order){
    return{
        type: DIFFERENTS_FORMS_TO_ORDER,
        payload: order
    }
}

export function createNewPokemon(data){
    return async function (dispatch){
        try {
             let res = await axios.post('http://localhost:3001/pokemons', data);
        return (
            dispatch({type:CREATE_A_NEW_POKEMON, payload:res.data})
        )
        } catch (error) {
            console.log(error);
        }
       
    }
}

export function updatePokemonsInPage(data){
    return{
        type: UPDATE_CHARACTERS_PAGE,
        payload: data
    }
}