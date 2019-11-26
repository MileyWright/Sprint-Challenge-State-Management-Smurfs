import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const NEW_SMURF = 'NEW_SMURF';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FAILED, payload: err.response });
      });
  };
  
  export const addSmurf = newSmurf => dispatch => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => console.log("A new Smurf in town", res));
  };
  
  export const editSmurf = smurf => dispatch => {
    axios
      .put("http://localhost:3333/smurfs", smurf)
      .then(res => console.log("village changes", res.data));
  };