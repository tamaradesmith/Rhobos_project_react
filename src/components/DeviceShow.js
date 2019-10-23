import React from "react";
import { Device } from "../js/requests"
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

  backtoNode = (() => {

    this.props.history.goBack()
  })

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
      });
  };
  render() {
    const { device, sensors, controllers } = this.state;
    if (!device || !controllers || !sensors) {
      return <p> loading</p>
    }

    return (
      <main className="DeviceDetail card">

        <h3 className="header">Device: {device.name.toUpperCase()} </h3>
        <div className="div-space" />

        <button onClick={this.backtoNode} className="link-button">Back to Node </button>


        {sensors.length !== 0 ? (
          <>
            <table className="device-table">
              <tbody>
                <tr>
                  <th>Sensor</th>
                  <th>Type</th>
                  <th>Min Value</th>
                  <th>Max Value</th>
                  <th>Value</th>
                  <th>Unit</th>
                </tr>

                {sensors.map((sensor, index) => (

                  <SensorDetail key={sensor.id} sensor={sensor} />

                ))}

              </tbody>
            </table>
          </>
        ) : (null)}



        {controllers.length !== 0 ? (
          <>

            <table className="device-table">
              <tbody>
                <tr>
                  <th>Controllers</th>
                  <th>Type</th>
                  {/* <th>Value</th> */}
                </tr>

                {controllers.map(
                  (controller, index) => (
                    <>
                      <ControllerDetail key={controller.id} controller={controller}  />
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