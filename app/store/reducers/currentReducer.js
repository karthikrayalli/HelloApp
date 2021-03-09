import { BUY_CAKE } from '../actionTypes/actionTypes';

const initialState ={
    numberOfCakes:10
}

export default currentReducer = (state=initialState,action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numberOfCakes:state.numberOfCakes - 1
        }
        default: return state;
    }
}
