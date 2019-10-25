import React from "react";
import { NavLink } from 'react-router-dom';
import td3dicon from "../../images/toggle.svg"

function NavBar(props) {
  return (
    <main className="NavBar" >
      <div className="nav-label">
        <NavLink to="/nodes" className="nav-text" >
          <figure className="nav-icon" >
            <img src={td3dicon} alt="Rhobos Icon" className="nav-icon" />
          </figure>
        </NavLink>
      </div>

      <div className="nav-menu">
        <NavLink to="/nodes" className="nav-text" >
          <h1>Rhobos</h1>
        </NavLink>
      </div>
    </main>

  )
}


export default NavBar