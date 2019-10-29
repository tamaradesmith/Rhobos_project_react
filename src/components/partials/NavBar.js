import React from "react";
import { NavLink } from 'react-router-dom';
import td3dicon from "../../images/circuit-icon.png"

function NavBar(props) {
  return (
    <main className="NavBar">
      <div className="nav-label">
        <div >
          <NavLink to="/nodes">
            <figure className="nav-icon">
              <img src={td3dicon} alt="Rhobos Icon" className="nav-icon" />
            </figure>
          </NavLink>
        </div>

        <div className="nav-label nav-div">
          <NavLink to="/nodes">
            <h1 className="nav-text"> Rhobos</h1>
          </NavLink>
          {/* <p className="nav-tag"> Environment & Atmosphere Control Technology</p> */}
        </div>
      </div>
        {/* <NavLink to="/nodes"  >
          <p className="nav-link"> Nodes </p>
        </NavLink> */}
    </main>

  )
}


export default NavBar