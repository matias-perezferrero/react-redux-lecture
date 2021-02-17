import { createStore, combineReducers } from 'redux'
import reducer from './reducer'
import pokeReducer from './pokeReducer'

const rootReducer = combineReducers({
    user: reducer,
    pokemon: pokeReducer
})

export default createStore(rootReducer)

//This is the file that creates a store object that has a state.
// Store = {
//     state: {
//         user: {},
//         pokemon: {}
//     }
// }