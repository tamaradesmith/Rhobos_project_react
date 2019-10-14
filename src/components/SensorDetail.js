import React from "react"
import '../styles/sensor.scss'

function  SensorDetail(props){

  return (
  <main className="SensorDetail">

   <div className="grid"> 
   Type: {props.type}
   
   </div>
{/* <p>Hi there</p> */}
  </main>
  )
}


export default SensorDetail