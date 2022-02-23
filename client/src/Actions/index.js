import axios from 'axios'
export const GET_POKEMONS = 'GET_POKEMONS'
export const FILTER_BY_TYPES = 'FILTER_BY_TYPES'
export const GET_BY_TYPES = 'GET_BY_TYPES'
export const GET_BY_NAME = 'GET_BY_NAMES'
export const SORT_UP = 'SORT_UP'
export const SORT_DOWN = 'SORT_DOWN'
export const STR_UP = 'STR_UP'
export const STR_DOWN = 'STR_DOWN'
export const GET_POKE_BY_ID = 'GET_POKE_BY_ID'
const back = 'http://localhost:3001/'


export function getPokemons() {
  return async function (dispatch) {
    const { data } = await axios.get(back + 'pokemons')
    dispatch({ type: GET_POKEMONS, payload: data })
  }
}
export function getByName(name) {
  return async function (dispatch) {
    try{
    const { data } = await axios.get(back + "pokemons/?name=" + name)
    dispatch({ type: GET_BY_NAME, payload: data })
    }catch(error){
      console.log(error)
    }
  }
}
export function getByTypes() {
  return async function (dispatch) {
    const { data } = await axios.get(back + 'types/')
    dispatch({ type: GET_BY_TYPES, payload: data })
  }
}
export function filterByTypes(type) {
  if(type!== 'all'){ return function (dispatch) {
    dispatch({ type: FILTER_BY_TYPES, payload: type })
  }}else{
    return function (dispatch){
    dispatch({ type: FILTER_BY_TYPES, payload: 'all'})
  }}
}

export function sort(flag) {
  if(flag==="nameAscendant") return function (dispatch) {
    dispatch({type: SORT_UP})
  }
  if(flag==="nameDescendant") return function (dispatch) {
    dispatch({ type: SORT_DOWN})
  }
  if(flag==="strAscendant") return function (dispatch){
    dispatch({type: STR_UP})
  }
  if(flag==="strDescendant") return function (dispatch){
    dispatch ({type: STR_DOWN})
  }
}

export function postPokemon(payload){

  try{
    return async function (){
      await axios.post(back + 'pokemons', payload)
    }
  }catch(error){
    console.log(error)
  }
}
export function getPokeId(id){
  return async function(dispatch){
    try{
      const {data} = await axios.get(back + 'pokemons/' + id)
      dispatch(
        {type: GET_POKE_BY_ID, payload: data}
      )
    }catch(error){
      console.log(error)
    }

  }}