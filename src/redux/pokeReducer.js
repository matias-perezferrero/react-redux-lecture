const initialState = {
    pokemon: {}
}

const GET_POKEMON = "GET_POKEMON"

export function getPokemon() {
    let pokemon;
    //get a pokemon
    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}

export default function pokeReducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMON:
            return {...state, pokemon: action.payload}
        default:
            return state
    }
}