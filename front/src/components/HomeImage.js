import React from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';

function HomeImage (){
  let history=useHistory()
  return(
    <div className="homeImage">
      <p>Le WILD CIRCUS VOUS PRESENTE SON NOUVEAU SPECTACLE DES WILDERS EN FOLIE</p>
      <div className="flexButton">
        <button className="homeButton" onClick={event=> { event.preventDefault(); history.push(`/dates`) }} href={`/dates`}>LES DATES</button>
        <button className="homeButton" onClick={event=> { event.preventDefault(); history.push(`/show`) }} href={`/show`}>VOIR PLUS</button>
      </div>
      <div classname="flexImages">
        <img className="imgFlex" alt="show" src="https://zupimages.net/up/20/05/qdfq.jpeg" />
        <img className="imgFlex" alt="show" src="https://zupimages.net/up/20/05/f9a6.jpeg" />
        <img className="imgFlex" alt="show" src="https://zupimages.net/up/20/05/pnhh.jpeg" />
      </div>
    </div>
  )  
}

export default HomeImage;