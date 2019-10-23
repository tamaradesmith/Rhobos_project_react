import React from 'react'
import homePic from "../images/td3dicon.png"


function Home(props) {

  return(
<main  className="Home card">
<h1 className="home-header">Over Blown Home Enviroment Moitoring and Control System</h1>
<figure>
        <img src={homePic} alt="TD3D Icon" className="nav-icon" />

</figure>
</main>

  )
  
}

export default Home