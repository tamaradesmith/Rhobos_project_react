import React from "react"
import '../styles/details.scss'

function SensorDetail(props) {
  const { sensor } = props;
  return (
    <main className="SensorDetail">
      {props.even === true ? (
        <div className="grid row">
          <p> name: {sensor.name}</p>
          <p> type: {sensor.type}</p>
          <p> min value: {sensor.minValue}</p>
          <p> max value: {sensor.maxValue}</p>
        </div>
      ) : (
          <div className="grid ">
            <p> name: {sensor.name}</p>
            <p> type: {sensor.type}</p>
            <p> min value: {sensor.minValue}</p>
            <p> max value: {sensor.maxValue}</p>
          </div>
        )}

    </main>
  )
}


export default SensorDetail