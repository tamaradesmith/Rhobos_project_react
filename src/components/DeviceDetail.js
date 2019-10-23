import React from "react";


function DeviceDetail(props) {
  const { device } = props
  return (
    <main className="DeviceDetail device-card">
      <h3> Device:  {device.name}</h3>
      <p> {device.description}</p>
    </main>
  )
}

export default DeviceDetail