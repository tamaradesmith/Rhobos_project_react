import React from "react"
import Chart from './partials/Chart'
import { Device, Sensor } from "../js/requests"

class DashBoard extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    readings: [],
    isLoading: true,
  }


  componentDidMount() {

    Device.getSensors(this.props.match.params.id).then(
      sensors => {
        this.setState({
          sensors: [...sensors],
          isLoading: false,
        });
      })
      .then(
        Sensor.getReadings(1)
          .then(
            readings => {
              this.setState({
                readings: [...readings],
                isLoading: false,
              });
            }));
  };
  render() {
    if (!this.state.sensors || !this.state.readings) {
      return <p> loading</p>
    }
    return (
      <main>
        <Chart reading={this.state.readings} sensorId={this.state.sensors[0]} />
      </main>
    )
  }
}

export default DashBoard