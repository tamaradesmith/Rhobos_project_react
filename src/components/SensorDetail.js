import React from "react"
import '../styles/details.scss'

function SensorDetail(props) {
  const { sensor } = props;
  return (
    <tr className="SensorDetail" key={sensor.id}>
          <td> {sensor.name}</td>
          <td>  {sensor.type}</td>
          <td> {sensor.minValue}</td>
          <td> {sensor.maxValue}</td>
      <td> {sensor.unit}</td>
      {/* <td> {sensor.maxValue}</td> */}
    </tr>
  )
}


export default SensorDetail