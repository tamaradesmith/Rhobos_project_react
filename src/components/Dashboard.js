import React from "react"
import Chart from './partials/Chart'
import { Controller, Node } from "../js/requests"
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
  return Object.values(temp).sort().reverse()
}


class Dashboard extends React.Component {
  state = {
    node: this.props.id,
    nodeName: "",
    sensors: [],
    readings: [],
    controllers: [],
    chartReadings: [],
    valueKeys: [],
    controllersState: [],
    lastReadings: [],
    isLoading: true,
  }

  backtoNode = (() => {
    this.props.history.goBack()
  })

  componentDidMount() {

    Node.allSensorsOnNode(this.props.match.params.id).then(
      sensors => {
        this.setState({
          sensors: [...sensors.flat()],
          isLoading: false,
        });
      })

    Node.getReadingsSenosrsOnNode(this.props.match.params.id)
      .then(
        readings => {
          this.setState({
            readings: convertToChartData([...readings]),
            valueKeys: readings.map(r => r[0].sensor),
            isLoading: false,
          });
        });

    Node.getAllControllersWithState(this.props.match.params.id)
      .then(
        controllers => {
          this.setState({
            controllers: [...controllers],
            isLoading: false
          });
        }).catch(err => {
          this.setState({
            controllers: [],
            isLoading: false,
          })
        });
        Node.one(this.props.match.params.id)
        .then(
          node=>{
            this.setState({
              node: node.name,
              isLoading: false,
            })
          }
        )
  };


  render() {
    const { sensors, controllers, node } = this.state;

    if (this.state.isLoading || !node) {
      return <p> loading</p>
    }

    return (

      <main className="card">
        <h3 className="header">
          Dashboard: {node.toUpperCase()}
        </h3>
        <button onClick={this.backtoNode} className="link-button">Back to Node </button>
        <div className="grid-dashboard">

          <div className="corner-grid"></div>
          {sensors.map((sensor, index) => (
            <div key={sensor.id}>
              <ReadingDetail  sensor={sensor}  />
            </div>
          ))}

          {controllers.map(controller => (
            <div key={controller.id} className="column-1" >
              <Button onToggle={() => Controller.toggleBoolean(controller.id)} controller={controller} />
            </div>
          ))}

          <div className="chart-div ">
            <Chart readings={this.state.readings} valueKeys={this.state.valueKeys} />
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard