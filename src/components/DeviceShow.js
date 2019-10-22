import React from "react";
import { Device } from "../js/requests"
import { Link } from 'react-router-dom'
import SensorDetail from "./SensorDetail";
import ControllerDetail from "./ControllerDetail"
import '../styles/device.scss'

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

        <h2>Device: {device.name} </h2>



        {sensors.length !== 0  ? (
          <>
            <h4 className="title">
              Sensors:
            </h4>
            <table className="device-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Min Value</th>
                  <th>Max Value</th>
                  <th>Unit</th>
                  {/* <th>Value</th> */}
                </tr>


                {sensors.map((sensor, index) => (
                  <>
                    <SensorDetail key={sensor.id} sensor={sensor}
                      even={this.even(index)} />
                  </>

                ))}

              </tbody>
            </table>
          </>
        ) : (null)}



        {controllers.length  !==0 ? (
          <>
        <h4 className="title"> Controllers</h4>

        <table className="device-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              {/* <th>Value</th> */}
            </tr>

            {controllers.map(
              (controller, index) => (
                <>
                  <ControllerDetail key={controller.id} controller={controller} even={this.even(index)} />
                </>
              )
            )}
          </tbody>
        </table>
        </>
       ) : (null)}
      </main>
    )
  }

}

export default DeviceShow