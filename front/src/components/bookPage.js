import React from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom'

function Perform (props){
  let history=useHistory()
  const eventId = useParams().id;
  return(
    <div className="Perform">
        <div className="OurWilders">
            <h2>{props.perform.title}</h2>
        </div>
        <div className="photoPerform">
            <img className="photoPerform" alt="show" src={props.perform.photo} />
        </div>
        <div className="descPerform">
            <p className="special">Dans la Catégorie : {props.perform.category}</p>
            <p className="special">{props.perform.presentation}</p>
        </div>
        <button className="homeButton" onClick={props.nextPerform}>SUIVANT</button>
        <button className="homeButton" onClick={event=> { event.preventDefault(); history.push(`/artistes/${props.perform.perform_id}`) }} href={`/artistes/${props.perform.perform_id}`}>ARTISTES</button>
  </div>
  )  
}

export default Perform;