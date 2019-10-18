import React from "react"
import Chart from './partials/Chart'
import { Device, Sensor, Controller } from "../js/requests"
import ReadingDetail from "./partials/ReadingDetail";
import '../styles/dashboard.scss'
import Button from "./partials/Button";


function formateTime(str) {
  return str.slice(0, -6)
}
function timeToMin(times){
  // times.map(time =>{
  //   console.log(time.time)
  // })
}

function convertToChartData(allReadings) {
  const temp = {}
  allReadings.forEach(readings =>{
    readings.forEach(reading =>{
      const data = temp[formateTime(reading.time)] || {time:formateTime(reading.time)}

      data[reading.sensor_id] = reading.value;
      temp[formateTime(reading.time)] = {...data}
    })
  })
  // timeToMin(temp)
  console.log(temp)
  return Object.values(temp).sort()
}


class DashBoard extends React.Component {
  state = {
    device: this.props.id,
    sensors: [],
    readings: [],
    controllers: [],
    chartReadings: [],
    valueKeys: [],
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
            valueKeys: readings.map(r =>r[0].sensor_id),
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
          })
        })
    Device.getControllers(this.props.match.params.id)
      .then(
        controllers => {
          this.setState({
            controllers: [...controllers],
            isLoading: false,
          })
        }
      )
  };


  render() {
    const { sensors, lastReading, controllers } = this.state;

    if (!sensors || !this.state.readings || !lastReading || !controllers) {
      return <p> loading</p>
    }
    return (
      <main className="grid-dashboard card">


        <ReadingDetail reading={lastReading} sensor={sensors[0]} getCurrentReading={() => {
          Sensor.getCurrentReading(7)
        }} />

        {controllers.map(controller => (
          <div key={Controller.id} className="column-1" >
            <Button onToggle={() => Controller.toggleBoolean(controller.id)} controller={controller} />
          </div>
        ))}


        <div className="chart-div">
          <Chart readings={this.state.readings} valueKeys={this.state.valueKeys} />
        </div>
      </main>
    )
  }
}

export default DashBoard