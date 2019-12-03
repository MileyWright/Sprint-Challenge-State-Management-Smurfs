import React from "react";

const SmurfCard = props => {
  
  return (
    <div className='smurfContainer'>
    
      {props.list.map(smurf => {
        console.log(smurf);
        return (
          <div className='smurfCard' key={smurf.id}>
            <h2>{smurf.name} Smurf</h2>
            <p>{`I'm ${smurf.age} years old, and ${smurf.height} tall!`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfCard;