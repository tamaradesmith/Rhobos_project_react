import React from "react";
import '../styles/device.css'


function DeviceDetail(props) {
  const { device } = props
  return (
    <main className="DeviceDetail device-card">
      <h3> Device:  {device.name}</h3>


    </main>
  )
}

export default DeviceDetail