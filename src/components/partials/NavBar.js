import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar(props) {
  return (
    <main className="NavBar" >
      <figure className="nav-icon">
        <img src="../images/td3dicon.png" alt="TD3D Icon" />
      </figure>
      <div className="nav-menu">
        <NavLink to="/"> Nodes </NavLink>
        <p> Device</p>

      </div>
    </main>

  )
}


export default NavBar