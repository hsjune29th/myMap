import React from "react";
import {
 NavLink
} from "react-router-dom";
export default function MyHeader(){
    return(
        <div id="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="background-icon">
              <i className="fas fa-home" style={{color: "red"}}></i>
              <a className="navbar-brand" href="/" style={{margin:"0 0 0 10px"}}> MY MAP</a>
              {/* <NavLink  className={"navbar-brand" } to="/" style={{margin:"0 0 0 10px"}} exact="true">MY MAP</NavLink> */}
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul className="navbar-nav ml-auto">
              
              <input type="search" id="search" placeholder=" Enter company name or address . . . ." style={{width:"500px",  border_radius: "5px"}}></input>
              
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Map
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <NavLink className={"dropdown-item"} to="/" exact="true" >Street</NavLink> */}
                    <a className="dropdown-item" href="/" exact="true">Street</a>
                    <div className="dropdown-divider"></div>
                    {/* <NavLink className={"dropdown-item"} to="/satellite" >Satellite</NavLink> */}
                    <a className="dropdown-item" href="satellite">Satellite</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="postProject">Post project</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="myProject">My project</a>
                    {/* <NavLink  className={"dropdown-item" } to="myProject" > My project</NavLink> */}
                   
                    <a className="dropdown-item" href="#">My news</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Log out</a>
                  </div>
                </li>
                
                {/* <div style={{color:"white",  opacity: 0.5}}>text</div> */}

              </ul>
            </div>
    
          </div>
    
        </nav>
    
    
      </div>
        
    )
}