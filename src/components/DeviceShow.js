import React from "react";
import { Device } from "../js/requests"
import { Link } from 'react-router-dom'
import SensorDetail from "./SensorDetail";
import ControllerDetail from "./ControllerDetail"
import '../styles/device.css'

class DeviceShow extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    controllers: [],
    isLoading: true
  };

  even(number) {
    return number % 2 === 0;
  }

  componentDidMount() {
    Device.one(this.props.match.params.id)
      .then(device => {
        this.setState({
          device: device[0],
          isLoading: false,
        })
      })

    Device.getSensors(this.props.match.params.id).then(
      sensors => {
        this.setState({
          sensors: [...sensors],
          isLoading: false,
        });
      }
    );
    Device.getControllers(this.props.match.params.id).then(
      controllers => {
        this.setState({
          controllers: [...controllers],
          isLoading: false,
        });
      }
    );
  };
  render() {
    if (!this.state.device || !this.state.controllers || !this.state.sensors) {
      return <p> loading</p>
    }

    const { device, sensors, controllers } = this.state;
    return (
      <main className="DeviceDetail card">

        <h2>Device: {device.name}</h2>
        <Link to={`/device/${device.id}/dashboard`} > Dashboard</Link>
        <div >
          <h4 className="title">
            Sensors:
            </h4>
          {sensors.map((sensor, index) => (
            <div key={sensor.id}>
              <SensorDetail sensor={sensor}
                even={this.even(index)}  />
            </div>

          ))}
        </div>
        <h4 className="title"> Controllers</h4>
        {controllers.map(
          (controller, index) => (
            <div key={controller.id}>
            {console.log(controller)}
              <ControllerDetail controller={controller} even={this.even(index)} />
            </div>
          )
        )}

      </main>
    )
  }

}

export default DeviceShow