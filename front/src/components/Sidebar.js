import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar(props){
    return(
      <Menu className="sideBar">
        <p className="menu-item-bar-actu">
          LES NUMEROS
        </p>
        <p className="menu-item-bar-actu">
          LES ARTISTES
        </p>
        <p className="menu-item-bar-actu">
        LE SPECTACLE
        </p>
        <p className="menu-item-bar-actu">
        RESERVER
        </p>
        <p className="menu-item-bar-actu">
        NOUS SUIVRE
        </p>
      </Menu>)
};

export default Sidebar;
