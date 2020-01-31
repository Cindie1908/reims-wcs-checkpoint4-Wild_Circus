import React from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';


function renderSwitch(showdate){
    let date=showdate.slice(5,7)
    switch(date){
        case "01":
            return <p>JAN</p>;
        case "02":
            return <p>FEV</p>;
        case "03":
            return <p>MAR</p>;
        case "04":
            return <p>AVR</p>;
        case "05":
            return <p>MAI</p>;
        case "06":
            return <p>JUI</p>;
        case "07":
            return <p>JUI</p>;
        case "08":
            return <p>AOU</p>;
        case "09":
            return <p>SEP</p>;
        case "10":
            return <p>OCT</p>;           
        case "11":
            return <p>NOV</p>;            
        default:
            return <p>DEC</p>;  
    }
  }


function DateShow ({title, showdate, showtime,showdescription,place}){
    let history=useHistory()
  return(
    <div className="DateShow">
        <div className="Cube">
            <p>{showdate.slice(8,10)}</p>
            {renderSwitch(showdate)}            
        </div>
        <div className="WhiteCard">
            <p>{title}</p>
            <p>Le {showdate.slice(8,10)}/{showdate.slice(5,7)}/{showdate.slice(2,4)} à {showtime.slice(0,5)} au {place}</p>    
            <p>{showdescription}</p>
            <p>Tarif unique à 9.00€</p>
            <button className="homeButton" onClick={event=> { event.preventDefault(); history.push(`/books`) }} href={`/books`}>RESERVER</button>
        </div>
    </div>
  )  
}

export default DateShow;
