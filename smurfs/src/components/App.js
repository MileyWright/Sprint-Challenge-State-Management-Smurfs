import React, { useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux';
import Form from './Form';
import SmurfList from './SmurfList';
import {getSmurfs} from './actions/getAction';
import {postSmurf} from './actions/postActions';

const App = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div className='App'>
      <h1> Smurfs! 2.0 with Redux</h1>
        <div className='container'>
          <Form />
          <SmurfList />
        </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, postSmurf})(App);