import React from 'react';
import '../App.css';

function Perform (props){
    console.log(props.perform.title)
  return(
    <div className="Perform">
        <div className="OurWilders">
            <h2>{props.perform.title}</h2>
        </div>
        <div className="photoPerform">
            <img className="photoPerform" src={props.perform.photo} />
        </div>
        <div className="descPerform">
            <p className="special">Dans la Catégorie : {props.perform.category}</p>
            <p className="special">{props.perform.presentation}</p>
        </div>
        <button className="homeButton" onClick={props.nextPerform}>SUIVANT</button>
  </div>
  )  
}

export default Perform;