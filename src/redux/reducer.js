//Initial state gives our store some initial values for state on the first run of the reducer
const initialState = {
    user: {
        username: "",
        email: "",
        age: ''
    }
}

//Make variables for the action types. This will avoid silent errors.
const UPDATE_USER = "UPDATE_USER"

//This is an action creator function, that returns an action object
//action objects have a type and a payload
export function updateUser(userObj) {
    // console.log(`Im hitting my updateUser action with ${JSON.stringify(userObj, null, 2)}`)
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}


//The reducer function takes in the current store state, and an action object, and uses the action
//to update the store state
export default function reducer(state = initialState, action) {
    // console.log(`I'm running the reducer, with an action of: ${JSON.stringify(action, null, 2)}`)
    switch (action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload}
        default:
            return state
    } 
}

// let state = {
//     user: "Sithara",
//     pokemon: "Mewtwo"
// }

// state = { ...state, user: "Cameron"}

// state = Object.assign({}, state, {user: "Cameron"})

// console.log(state)