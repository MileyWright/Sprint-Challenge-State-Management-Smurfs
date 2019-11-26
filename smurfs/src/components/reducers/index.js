import { START, SUCCESS, FAILED, NEW_SMURF } from "../actions";

const initialState = {
  smurfs: [],
   error: null,
  isLoading: false
 
  
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        isLoading: true
      };
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    // case NEW_SMURF:
    //         const newSmurf = {
    //             name: action.payload.newSmurfName,
    //             height: action.payload.newSmurfHeight,  
    //             age: action.payload.newSmurfAge,
    //             id: Date.now()
    //         }
    //         return{
    //             ...state,
    //             smurf: [
    //                 ...state.smurfs, newSmurf
    //             ]
    //         }
    default:
      return state;
  }
};

export default Reducer;
