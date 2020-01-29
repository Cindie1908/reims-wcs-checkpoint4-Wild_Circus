import React from 'react';
import '../App.css';

function HomeImage (){
  return(
    <div className="homeImage">
      <p>Le WILD CIRCUS VOUS PRESENTE SON NOUVEAU SPECTACLE DES WILDERS EN FOLIE</p>
      <div className="flexButton">
        <button className="homeButton">RESERVER</button>
        <button className="homeButton">VOIR PLUS</button>
      </div>
    </div>
  )  
}

export default HomeImage;