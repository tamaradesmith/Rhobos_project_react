import React from "react";
// import { Sensor } from "../../js/requests";

function ReadingDetail(props) {


  const { reading } = props;
  const { sensor } = props;

  if (!sensor) {
    return ""
  }

  return (

    <main className="reading-div" onClick={props.getCurrentReading}>

      <p>{sensor.name} </p>
      <p>{reading.value}</p>
    </main>
  )
}
export default ReadingDetail