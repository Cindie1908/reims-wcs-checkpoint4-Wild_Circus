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
        <div>
          <p className="menu-item-bar-actu">
          NOUS SUIVRE :
          </p>
          <figure className="figureLogo">
            <a href="https://github.com/Cindie1908/reims-wcs-checkpoint4-Wild_Circus" title="github">
              <img className="logoLink" alt="show" src="https://zupimages.net/up/20/05/og8t.png" />
            </a>
            <a href="https://www.linkedin.com/in/cindie-jouvin-42019a168/" title="linkedin">
              <img className="logoLink" alt="show" src="https://zupimages.net/up/20/05/m043.png" />
            </a>
            <a href="https://www.linkedin.com/in/https://www.facebook.com/cindie.jouvin" title="facebook">
              <img className="logoLink" alt="show" src="https://zupimages.net/up/20/05/d9h1.png" />
            </a>    
          </figure>
          
        </div>
      </Menu>)
};

export default Sidebar;
