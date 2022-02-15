import {
    GET_POKEMONS,
    FILTER_BY_TYPES,
    GET_BY_TYPES,
    GET_BY_NAME,
    SORT_UP,
    SORT_DOWN,
    STR_UP,
    STR_DOWN
} from '../Actions/index'

const initialState = {
    pokemon: [],
    allPokemons: [],
    favorites: [],
    types: [],
    detail: [],
    backUpPokemon: []
}
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_POKEMONS: {
            return {
                ...state,
                allPokemons: payload,
                backUpPokemon: payload
            }
        }
        case GET_BY_NAME: return {
            ...state,
            allPokemons: payload
        }
        case GET_BY_TYPES: {
            return {
                ...state,
                types: payload,
            }
        }
        case FILTER_BY_TYPES: {
            if(payload !== 'all'){
            const poke = state.backUpPokemon.filter((elemento) => {
                return elemento.types.includes(payload)
            })
            return {
                ...state,
                pokemon: [],
                allPokemons: poke
            }
        }else{
            return {
                ...state,
                pokemon: [],
                allPokemons: state.backUpPokemon
        }}
        }
        case SORT_UP: {
            let list = state.backUpPokemon
            list.sort((a, b) => a.name.localeCompare(b.name))
            return {
                ...state,
                allPokemons: [...list]
            }
        }
        case SORT_DOWN:{
            let list = state.backUpPokemon
            list.sort((a, b) => b.name.localeCompare(a.name))
            return {
                ...state,
                allPokemons: [...list]
            }
        }
        case STR_UP :{
            let list = state.backUpPokemon
            list.sort((a,b)=> a.attack > b.attack? 1 : -1)
            return {
                ...state,
                allPokemons: [...list]
            }
        }
        case STR_DOWN :{
            let list =state.backUpPokemon
            list.sort((a,b)=> a.attack < b.attack? 1 : -1)
            return {
                ...state,
                allPokemons: [...list]
            }
        }
        default: return state
    }
}