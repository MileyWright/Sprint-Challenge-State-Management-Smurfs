import axios from 'axios';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';

export const getSTART = () => {
    dispatchEvent( {type: START });

    axios
        .get('http://localhost:3333/smurfs')
        .then (res => 
            dispatchEvent({
                type: SUCCESS,
                payload: res.smurfs
            })
        )
        .catch(error =>{
            console.log(error);
            dispatchEvent({
                type: FAILED,
                payload: 'error loading'
            })
        })
}

