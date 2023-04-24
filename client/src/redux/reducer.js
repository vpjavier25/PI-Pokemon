import {
    ADD_CHARACTERS,
    GET_TYPES,
    SEARCH_CHARACTER_BY_NAME,
    FILTER_BY_TYPES,
    FILTER_BY_SOURCE,
    DIFFERENTS_FORMS_TO_ORDER,
    CREATE_A_NEW_POKEMON,
    SEARCH_CHARACTER_BY_NAME_ERROR,
    CLOSE_SEARCH
} from './actions'

const initialState = {
    pokemonsShow: [],
    allPokemons: [],
    errorSearchByName: [],
    post: '',
    postError: '',
    types: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CHARACTERS:
            return {
                ...state,
                allPokemons: [...action.payload],
                pokemonsShow: [...action.payload]
            };

        case GET_TYPES:
            return {
                ...state,
                types: [...action.payload]
            }

        case SEARCH_CHARACTER_BY_NAME:
            let pokemonsFound = [action.payload];
            return {
                ...state, pokemonsShow: pokemonsFound
            }

        case SEARCH_CHARACTER_BY_NAME_ERROR:
            let errorMessage = [action.payload];
            return {
                ...state,
                errorSearchByName: errorMessage,
                pokemonsShow: []
            }

        case CLOSE_SEARCH:
            return {
                ...state,
                pokemonsShow: [...state.allPokemons],
                errorSearchByName: ''
            }

        case FILTER_BY_TYPES:

            if (action.payload === 'allPokemons') {
                return {
                    ...state, pokemonsShow: [...state.allPokemons]
                }
            } else {

                let matchesPokemons = state.allPokemons.filter((pokemon) => pokemon.types.includes(action.payload))

                return {
                    ...state, pokemonsShow: matchesPokemons
                }
            }

        case FILTER_BY_SOURCE:

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

            break;

        case DIFFERENTS_FORMS_TO_ORDER:

            if (action.payload === 'All') {
                return {
                    ...state, pokemonsShow: [...state.allPokemons]
                }
            } else if (action.payload === 'AlphAsc') {
                return {
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.name < b.name) return -1;
                       
                        return 0;
                    })
                }

            } else if (action.payload === 'AlphDesc') {
                return {
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.name < b.name) return -1;
                        
                        return 0;
                    }).reverse()
                }
            } else if (action.payload === 'AscAtt') {
                return {
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.attack < b.attack) return -1;

                        return 0;
                    })
                }
            } else if (action.payload === 'DesAtt') {
                return {
                    ...state, pokemonsShow: [...state.pokemonsShow].sort((a, b) => {
                        if (a.attack < b.attack) return -1;
                        
                        return 0;
                    }).reverse()
                }
            }

            break;
            
        case CREATE_A_NEW_POKEMON:
            return {
                ...state, post: action.payload
            }


        default:
            return {
                ...state
            };
    }
}