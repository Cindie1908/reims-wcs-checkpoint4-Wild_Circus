import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar(props){
    return(
      <Menu className="sideBar">
        <Link className="menu-item-bar-actu" to="/">
          LE SPECTACLE          
        </Link>        
        <Link className="menu-item-bar-actu" to="/show">
          LES NUMEROS
        </Link>
        <Link className="menu-item-bar-actu" to="/artists">
          LES ARTISTES          
        </Link>
        <Link className="menu-item-bar-actu" to="/pictures">
          GALERIE PHOTOS         
        </Link>        
        <Link className="menu-item-bar-actu" to="/dates">
          VOIR LES DATES        
        </Link>
        <p className="menu-item-bar-actu">
        NOUS SUIVRE
        </p>
      </Menu>)
};

export default Sidebar;
