import React from "react";
import { Sensor } from "../../js/requests";

class ReadingDetail extends React.Component {

  state = {
    reading: (this.props.reading) ? this.props.reading.value : "",
    isLoading: true,
  };


  handleButtonClick = () => {
    Sensor.getCurrentReading(this.props.sensor.id)
      .then(
        reading => {
          console.log("reading ", reading)
          this.setState({
            reading: reading,
          });
        });
  };
  componentDidMount() {

    Sensor.getLastReading(this.props.sensor.id)
      .then(
        reading => {
          this.setState({
            reading: reading[0].value,
            isLoading: false
          });
        });
  };


  render() {

    const { reading } = this.state;
    const { sensor } = this.props;

    if (!sensor) {
      return ""
    }

    return (
      <button className="reading-div" onClick={this.handleButtonClick}>
      {(sensor.type === "temperature") ? (
        <p>{sensor.device} </p>
      ):(null)}
        <p>{sensor.name.toUpperCase()} </p>
        <p>{reading}</p>
      </button>
    )
  }
}
export default ReadingDetail