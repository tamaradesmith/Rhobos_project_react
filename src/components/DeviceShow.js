import React from "react";
import { Device } from "../js/requests"
import SensorDetail from "./SensorDetail";
import '../styles/device.css'

class DeviceShow extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    controller: [],
    isLoading: true
  };
  componentDidMount() {
    
    Device.getSensors(this.props.match.params.id).then(
      sensors => {
        this.setState({
          sensors: [...sensors],
          isLoading: false,
        })
      }
      )
    }
    render() {
      
      return (
        
        <main className="DeviceDetail card">
          <h3>
            Sensors:
          </h3>
        {this.state.sensors.map(sensor => (
          <div key={sensor.id}>
          <SensorDetail type={sensor.type} /> 

          </div>
        ))}
       

      </main>
    )
  }

}

export default DeviceShow