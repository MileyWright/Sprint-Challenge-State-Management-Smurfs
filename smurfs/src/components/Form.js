import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from './actions';

const SmurfForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
  
    const nameChange = e => {
      setName(e.target.value);
    };
  
    const ageChange = e => {
      setAge(e.target.value);
    };
  
    const heightChange = e => {
      setHeight(e.target.value);
    };
  
    const handleSubmit = e => {
      let newSmurf = {
        name: name,
        age: age,
        height: height
      };
      props.addSmurf(newSmurf);
    };
  
    return (
      <form onChange={handleSubmit}>
        <input
          onChange={nameChange}
          type="text"
          value={name}
          placeholder="name"
        />
        <input onChange={ageChange} type="text" value={age} placeholder="age" />
        <input
          onChange={heightChange}
          type="text"
          value={height}
          placeholder="height"
        />
        <button type="submit">Add New Villager</button>
      </form>
    );
  };
  
  export default connect(null, { addSmurf })(SmurfForm);