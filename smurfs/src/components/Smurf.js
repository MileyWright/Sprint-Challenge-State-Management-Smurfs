import React, { useState } from "react";
import { connect } from "react-redux";
import { editSmurf } from "./actions/getAction";

const Smurf = props => {
  const [name] = useState("");
  const [age] = useState("");
  const [height] = useState("");

  const handleChanges = e => {
    let edit = {
      name: name,
      age: age,
      height: height
    };
    props.editSmurf(edit);
  };

  return (
    <form onChange={handleChanges}>
      <div className="smurfs">
        <h3>{`Name: ${props.name}`}</h3>
        <p>{`Age: ${props.age}`}</p>
        <p>{`Height: ${props.height}`}</p>
        <button type="submit">X</button>
        <button type="submit">Edit</button>
      </div>
    </form>
  );
};

export default connect(null, { editSmurf })(Smurf);