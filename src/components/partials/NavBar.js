import React from "react";
import { NavLink } from 'react-router-dom';
import td3dicon from "../../images/td3dicon.png"

function NavBar(props) {
  return (
    <main className="NavBar" >
      <div className="nav-label">

        <figure className="nav-icon" >
          <img src={td3dicon} alt="TD3D Icon" className="nav-icon" />
        </figure>
        <p>OBHEMCS</p>
      </div>


      <div className="nav-menu">
        <NavLink to="/"> Nodes </NavLink>
        <p> Device</p>

      </div>
    </main>

  )
}


export default NavBar