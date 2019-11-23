import {START, SUCCESS, FAILED} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    smurfData: {
        name: '',
        age: '',
        height: ''
    }
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS:
            return {
                ...state, 
                smurfData: {
                    ...state.smurfData, 
                    name: action.payload,
                    age: action.payload,
                    height: action.payload
                }
            }
        case FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

export default Reducer;