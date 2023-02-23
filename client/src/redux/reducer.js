import { ADDCHARACTERS, GETTYPES, SEARCHCHARACTERBYNAME, FILTERBYTYPES, FILTERBYSOURCE, DIFFERENTSFORMSTOORDER, CREATEANEWPOKEMON } from './actions'

const initialState = {
    pokemonsShow: [],
    allPokemons: [],
    post:'',
    types:[]
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADDCHARACTERS:
            return {
                ...state,
                allPokemons: [...action.payload],
                pokemonsShow: [...action.payload]
            };
        
        case GETTYPES:
            return {
                ...state,
                types: [...action.payload]
            }
            
        case SEARCHCHARACTERBYNAME:
            let pokemonsFound = [action.payload];
            return {
                ...state, pokemonsShow: pokemonsFound
            }
            
        case FILTERBYTYPES:

            if (action.payload === 'allPokemons' || action.payload === 'select') {
                return {
                    ...state, pokemonsShow: [...state.allPokemons]
                }
            } else {

                let matchesPokemons = state.allPokemons.filter((pokemon) => pokemon.types.includes(action.payload) === true)

                return {
                    ...state, pokemonsShow: matchesPokemons
                }
            }
            
        case FILTERBYSOURCE:

            if (action.payload === 'All') {
                return {
                    ...state, pokemonsShow: [...state.allPokemons]
                }
            } else if (action.payload === 'Api') {
                let matchesPokemons = state.allPokemons.filter((pokemon) => typeof pokemon.id === "number");
                return {
                    ...state, pokemonsShow: matchesPokemons
                }
            } else if (action.payload === 'Db') {
                let matchesPokemons = state.allPokemons.filter((pokemon) => typeof pokemon.id === "string");
                return {
                    ...state, pokemonsShow: matchesPokemons
                }
            }
            

        case DIFFERENTSFORMSTOORDER:

            if (action.payload === 'select') {
                return {
                    ...state, pokemonsShow: [...state.allPokemons]
                }
            } else if (action.payload === 'AlphAsc') {
                return {
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    })
                } 
               
            } else if (action.payload === 'AlphDesc') {
                return{
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    }).reverse()
                }
            } else if (action.payload === 'AscAtt') {
                return {
                    ...state, pokemonsShow:[...state.pokemonsShow].sort((a, b) => {
                        if (a.attack < b.attack) return -1;
                        if (a.attack > b.attack) return 1;
                        return 0;
                    })
                }
            } else if (action.payload === 'DesAtt') {
                return {
                    ...state, pokemonsShow:[...state.pokemonsShow].sort((a, b) => {
                        if (a.attack < b.attack) return -1;
                        if (a.attack > b.attack) return 1;
                        return 0;
                    }).reverse()
                }
            }
        
        case CREATEANEWPOKEMON:
            return {
                ...state, post: action.payload
            }

        default:
            return {
                ...state
            };
    }
}