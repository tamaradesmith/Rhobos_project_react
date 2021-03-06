import React from "react"
import Chart from './partials/Chart'
import { Controller, Node } from "../js/requests"
import ReadingDetail from "./partials/ReadingDetail";
import Button from "./partials/Button";
import { format } from 'date-fns'
import backArrow from "../images/backarrow.png"



function formateTime(str) {
  return str.slice(0, -6)
}


function convertToChartData(allReadings) {
  const temp = {}
  allReadings.forEach(readings => {
    readings.forEach(reading => {
      if (reading.value === 0) {
        reading.value = 1;
        // return
      }
      const data = temp[formateTime(reading.time)] || { time: format(new Date(reading.time), "H:m:ss"), date: `${format(new Date(reading.time), "MMM d")}` }
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
    times: [{ period: "Day", number: 24 }, { period: "Week", number: 24 * 7 }, { period: "Month", number: 24 * 7 * 30 }],
    period: "Day",
    interval: 4,
    checked: true,
    isLoading: true,
  }

  backtoNode = (() => {
    this.props.history.goBack()
  })

  handleChange = ((event) => {
    
    const number = event.target.value;
    let interval = 4
    let period = "Day"
    if (number >= 4 * 7 * 30) {
      interval = (number / (24 * 3))
      period = "Month"
    } else if (number >= 4 * 7) {
      interval = (number / 7);
      period = "Week"
    }
    Node.getReadingsSenosrsOnNode(this.props.match.params.id, number)
      .then(
        readings => {
          this.setState({
            readings: convertToChartData([...readings]),
            valueKeys: readings.map(r => r[0].sensor),
            interval: interval,
            period: period,
            isLoading: false,
          });
        });
  })

  componentDidMount() {

    Node.allSensorsOnNode(this.props.match.params.id).then(
      sensors => {
        this.setState({
          sensors: [...sensors.flat()],
          isLoading: false,
        });
      })

    Node.getReadingsSenosrsOnNode(this.props.match.params.id, 24)
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
        node => {
          this.setState({
            node: node.name,
            isLoading: false,
          })
        }
      )
  };


  render() {
    const { sensors, controllers, node, times, interval, period } = this.state;

    if (this.state.isLoading || !node) {
      return <p> loading</p>
    }

    return (

      <main className="card">
   
        <div className="catagory-header">
          Dashboard
        </div>

        <h3 className="header">
          {node}
        </h3>
        <div className="div-space" />
        <div className="grid-dashboard">

          <button onClick={this.backtoNode} className="link-button corner-grid deck" >

            <img src={backArrow} alt="Back Arrow" className="arrow-icon" />  <p className="text-center">
              Node
          </p>
          </button>

          {sensors.map((sensor) => (
            <div key={sensor.id} className="reading">
              <ReadingDetail sensor={sensor} />
            </div>
          ))}

          {controllers.map(controller => (
            <div key={controller.id} className="column-1" >
              <Button onToggle={() => Controller.toggleBoolean(controller.id)} controller={controller} />
            </div>
          ))}

          <div className="chart-div ">

            <Chart readings={this.state.readings} valueKeys={this.state.valueKeys} interval={interval} />
          </div>
          <div className="period-div">
            <div className="chart-period" >
              <h4 className="period-label "> Chart periods: </h4>

              {times.map((time, index) => (
                <React.Fragment key={index}>
                  <label className="radio-name chart-check-box">
                  
                    <input type="radio" value={time.number} name="times" className="check" onChange={this.handleChange} checked={time.period === period ? true : false} />
                    <div className="check-circle inner"></div>

                    <p className="check-text">{time.period} </p>
                    
                    </label>
                  
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard