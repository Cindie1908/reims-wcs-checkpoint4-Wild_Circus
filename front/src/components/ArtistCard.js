import React from 'react';
import '../App.css';

function ArtistCard ({firstname,lastname,speciality,photo}){
  return(
    <div className="ArtistCard">
        <div className="photoArtist">
            <img src={photo} />
        </div>
        <div className="descArtist">
            <p className="desc">{firstname} {lastname}</p>
            <p className="special">{speciality}</p>
        </div>
    </div>
  )  
}

export default ArtistCard;
