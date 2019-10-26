import React from "react";
import { NavLink } from 'react-router-dom';
import td3dicon from "../../images/circuit-icon.png"

function NavBar(props) {
  return (
    <main className="NavBar" >
      <div className="nav-label">
        <NavLink to="/" >
          <figure className="nav-icon" >
            <img src={td3dicon} alt="Rhobos Icon" className="nav-icon" />
          </figure>
        </NavLink>
      </div>

      <div className="nav-label">
        <NavLink to="/nodes"  >
          <h1 className="nav-text"> Rhobos</h1>
        </NavLink>
      </div>
    </main>

  )
}


export default NavBar