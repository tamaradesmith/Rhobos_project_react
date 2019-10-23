import React from "react";
import { NavLink } from 'react-router-dom';
import td3dicon from "../../images/td3dicon.png"
import td3dicon2 from "../../images/td3dicon2.png"

function NavBar(props) {
  return (
    <main className="NavBar" >
      <div className="nav-label">
        <NavLink to="/" className="nav-text" >
        <figure className="nav-icon" >
          <img src={td3dicon} alt="TD3D Icon" className="nav-icon" />
        </figure>
        </NavLink>
      </div>


      <div className="nav-menu">
        <NavLink to="/" className="nav-text" > Home </NavLink>
        <p className="nav-text">OBHEMCS</p>
        <NavLink to="/nodes" className="nav-text" > Nodes </NavLink>
      </div>

      <div className="nav-label">
        <NavLink to="/" className="nav-text" >
          <figure className="nav-icon" >
            <img src={td3dicon2} alt="TD3D Icon" className="nav-icon" />
          </figure>
        </NavLink>
      </div>

    </main>

  )
}


export default NavBar