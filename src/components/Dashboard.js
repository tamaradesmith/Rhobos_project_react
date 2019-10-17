import React from "react"
import Chart from './partials/Chart'
import { Device, Sensor, Controller } from "../js/requests"
import ReadingDetail from "./partials/ReadingDetail";
import '../styles/dashboard.scss'
import Button from "./partials/Button";

class DashBoard extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    readings: [],
    controllers: [],
    lastReading: "",
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


    // Sensor.getReadings(this.props.match.params.id)
    //   .then(
    //     readings => {
    //       console.log("inside dashboard component did mount readings =>", readings)
    //       this.setState({
    //         readings: [...readings],
    //         isLoading: false,
    //       });
    //     });

    Sensor.getSensorReadings(1)
      .then(
        readings => {
          this.setState({
            readings: [...readings],
            isLoading: false,
          });
        });

    Sensor.getLastReading(7)
      .then(
        reading => {
          this.setState({
            lastReading: reading[0],
            isLoading: false,
          })
        })
    Device.getControllers(this.props.match.params.id)
    .then(
      controllers =>{
        this.setState({
          controllers: [...controllers],
          isLoading: false,
        })
      }
    )
  };

  
  render() {
    const { sensors, lastReading, controllers } = this.state;
    if (!this.state.sensors || !this.state.readings || !this.state.lastReading) {
      return <p> loading</p>
    }
    return (
      <main className="grid-dashboard card">
        <div>
          <ReadingDetail reading={lastReading} sensor={sensors[0]} />
        </div>
        <div>
          <Button onToggle={() => Controller.toggleBoolean(2)} controller={controllers[1]} />
        </div>
        <div className="chart-div">
          <Chart reading={this.state.readings} sensorId={sensors[0]} />
        </div>
      </main>
    )
  }
}

export default DashBoard