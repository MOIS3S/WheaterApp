import { SET_CITY } from './../actions';


export const city = (state = {}, action) => {
    console.log(state, action);
    // dependiendo del tipo de action se ejecuta
    switch (action.type) {
        case SET_CITY:
            // retornamos primero el estado anterior con ...state y el nuevo estado con action.value
            return action.payload;
        default:
            return state;
    }
}