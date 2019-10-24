import React from "react"
import { Sensor } from "../js/requests";

class SensorDetail extends React.Component {

  state = {
    reading: (this.props.reading) ? this.props.reading.value : "",
    isLoading: true,

  }
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

    const { sensor } = this.props;
    const { reading } = this.state;
    return (
      <tr className="SensorDetail" key={sensor.id}>
        <td> {sensor.name}</td>
        <td> {sensor.type}</td>
        <td> {sensor.minValue}</td>
        <td> {sensor.maxValue}</td>
        <td> {reading}</td>
        <td> {sensor.unit}</td>
      </tr>
    )
  }
}


export default SensorDetail