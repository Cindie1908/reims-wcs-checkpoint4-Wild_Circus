import React from 'react';
import '../App.css';

function Compo ({firstname,lastname,speciality,photo}){
  return(
    <div className="ArtistCard">
        <div className="photoArtist">
            <img src={photo} alt="artiste" />
        </div>
        <div className="descArtist">
            <p className="desc">{firstname} {lastname}</p>
            <p className="special">{speciality}</p>
        </div>
    </div>
  )  
}

export default Compo;