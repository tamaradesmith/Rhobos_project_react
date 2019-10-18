import React from "react";
// import { Sensor } from "../../js/requests";

function ReadingDetail(props) {


  const { reading } = props;
  const { sensor } = props;

  const handleButtonClick =() => {
    props.getCurrentReading()
  }

  if (!sensor) {
    return ""
  }

  return (

    <button className="reading-div" onClick={handleButtonClick}>
      <p>{sensor.name} </p>
      <p>{reading.value}</p>
    </button>
  )
}
export default ReadingDetail