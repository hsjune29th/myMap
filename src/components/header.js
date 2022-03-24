import React from "react";
import {
 NavLink
} from "react-router-dom";
export default function MyHeader(){
    return(
        <div id="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <div class="background-icon">
              <i class="fas fa-home" style={{color: "red"}}></i>
              <a class="navbar-brand" href="/" style={{margin:"0 0 0 10px"}}> MY MAP</a>
              {/* <NavLink  className={"navbar-brand" } to="/" style={{margin:"0 0 0 10px"}} exact="true">MY MAP</NavLink> */}
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul class="navbar-nav ml-auto">
              
              <input type="search" id="search" placeholder=" Enter company name or address . . . ." style={{width:"500px",  border_radius: "5px"}}></input>
              
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Map
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <NavLink className={"dropdown-item"} to="/" exact="true" >Street</NavLink> */}
                    <a class="dropdown-item" href="/" exact="true">Street</a>
                    <div class="dropdown-divider"></div>
                    {/* <NavLink className={"dropdown-item"} to="/satellite" >Satellite</NavLink> */}
                    <a class="dropdown-item" href="satellite">Satellite</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Account
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="postProject">Post project</a>
                    <div class="dropdown-divider"></div>
                    {/* <a class="dropdown-item" href="myProject">My project</a> */}
                    <NavLink  className={"dropdown-item" } to="myProject" > My project</NavLink>
                   
                    <a class="dropdown-item" href="#">My news</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Log out</a>
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