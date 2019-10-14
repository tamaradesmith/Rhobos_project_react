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

    return (
      <main className="DeviceDetail card">

        <h2>Device: {this.state.device.name}</h2>
        <Link to={`/device/${this.state.device.id}/dashboard`} > Dashbord</Link>
        <div >
          <h4 className="title">
            Sensors:
            </h4>
          {this.state.sensors.map((sensor, index) => (
            <div key={sensor.id}>
              <SensorDetail type={sensor.type}
                even={this.even(index)} />
            </div>

          ))}
        </div>
        <h4 className="title"> Controllers</h4>
        {this.state.controllers.map(
          (controller, index) => (
            <div key={controller.id}>
              <ControllerDetail type={controller.type} even={this.even(index)} />
            </div>
          )
        )}

      </main>
    )
  }

}

export default DeviceShow