import React from "react";
import { Device, Controller } from "../js/requests"
import SensorDetail from "./SensorDetail";
import ControllerDetail from "./ControllerDetail"
import backArrow from "../images/backarrow.png"




class DeviceShow extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    controllers: [],
    led: false,
    lightShows: [],
    isLoading: true
  };

  incluseLeds = (() => {
    this.state.controllers.forEach(controller => {
      if (controller.type.toLowerCase() === "led") {
        Controller.getLightShows(controller.id)
          .then(
            shows => {
              this.setState({
                lightShows: [...shows],
                led: true
              })
            })
      }
    })
  })


  backtoNode = (() => {
    this.props.history.goBack();
  });

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
        sensors.map(sensor => {
       return sensor.name = sensor.name[0].toUpperCase() + sensor.name.slice(1)
        })
        this.setState({
          sensors: [...sensors],
          isLoading: false,
        });
      }
    );
    Device.getControllers(this.props.match.params.id).then(
      controllers => {
        controllers.map(controller => {
         return controller.name = controller.name[0].toUpperCase() + controller.name.slice(1)
        })
        this.setState({
          controllers: [...controllers],
          isLoading: false,
        })
        this.incluseLeds();
      });


  };
  render() {
    const { device, sensors, controllers, led, lightShows } = this.state;
    if (!device || !controllers || !sensors) {
      return <p> loading</p>
    }

    return (
      <main className="DeviceDetail card">

        <div className="catagory-header">device</div>
        
        <h3 className="header"> {device.name} </h3>
        <div className="div-space-small" />

        <button onClick={this.backtoNode} className="link-button"> <img src={backArrow} alt="Back Arrow" className="arrow-icon" />  <p className="text-center">
          Node
          </p></button>


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

                {sensors.map((sensor) => (

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
                  {led === true ? (
                    <th>Default Show - <small> click to select change default</small></th>

                  ) : (null)}
                </tr>

                {controllers.map(
                  (controller) => (

                    <ControllerDetail key={controller.id} controller={controller} includeLed={led} shows={lightShows} />

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