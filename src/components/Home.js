import React from 'react'
import {Link} from 'react-router-dom'


function Home(props) {

  return(
<main  className="Home card">
      <div className="title-grid">

      <h1 className="home-header">Environment & Atmosphere Control Technology</h1>
      {/* <br /> */}
        <div className="tag-line">
<Link to={'/nodes'} className="node-link">View All Nodes Here </Link>

      </div>
</div>
<div className="home-background" /> 
</main>

  )
  
}

export default Home