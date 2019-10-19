import React from "react"
import Chart from './partials/Chart'
import { Device, Sensor, Controller } from "../js/requests"
import ReadingDetail from "./partials/ReadingDetail";
import '../styles/dashboard.scss'
import Button from "./partials/Button";
import { format } from 'date-fns'




function formateTime(str) {
  return str.slice(0, -6)
}


function convertToChartData(allReadings) {
  const temp = {}
  allReadings.forEach(readings => {
    readings.forEach(reading => {
      const data = temp[formateTime(reading.time)] || { time: format(new Date(reading.time), "H:m:s"), date: format(new Date(reading.time), "MMM d") }
      data[reading.sensor] = reading.value;
      temp[formateTime(reading.time)] = { ...data }
    })
  })
  // console.log(temp)
  return Object.values(temp).sort().reverse()
}


class Dashboard extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    readings: [],
    controllers: [],
    chartReadings: [],
    valueKeys: [],
    controllersState: [],
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

    Sensor.getReadings(this.props.match.params.id)
      .then(
        readings => {
          this.setState({
            readings: convertToChartData([...readings]),
            valueKeys: readings.map(r => r[0].sensor),
            isLoading: false,
          });
        });


    // Sensor.getSensorReadings(1)
    //   .then(
    //     readings => {
    //       this.setState({
    //         readings: [...readings],
    //         isLoading: false,
    //       });
    //     });

    Sensor.getLastReading(7)
      .then(
        reading => {
          this.setState({
            lastReading: reading[0],
            isLoading: false,
          });
        });

    // Device.getControllers(this.props.match.params.id)
    //   .then(
    //     controllers => {
    //       this.setState({
    //         controllers: [...controllers],
    //         isLoading: false,
    //       });
    //     });

    Device.getControllersState(this.props.match.params.id)
      .then(
        controllers => {
          console.log("controllers : ", controllers)
          this.setState({
            controllers: [...controllers],
            isLoading: false
          });
        });
  };


  render() {
    const { sensors, lastReading, controllers } = this.state;

    if (!sensors || !this.state.readings || !lastReading || !controllers) {
      return <p> loading</p>
    }
    return (
      <main className="grid-dashboard card">

        <div className="corner-grid"></div>
        <ReadingDetail reading={lastReading} sensor={sensors[0]} getCurrentReading={() => {
          Sensor.getCurrentReading(7)
        }} />

        {controllers.map(controller => (
          <div key={controller.id} className="column-1" >
            <Button onToggle={() => Controller.toggleBoolean(controller.id)} controller={controller}  />
          </div>
        ))}


        <div className="chart-div">
          <Chart readings={this.state.readings} valueKeys={this.state.valueKeys} />
        </div>
      </main>
    )
  }
}

export default Dashboard