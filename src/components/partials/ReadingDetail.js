import React from "react";
import { Sensor } from "../../js/requests";
import arrow from "../../images/click.png"

class ReadingDetail extends React.Component {

  state = {
    reading: (this.props.reading) ? this.props.reading.value : "",
    isLoading: true,
  };


  handleButtonClick = () => {
    Sensor.getCurrentReading(this.props.sensor.id)
      .then(
        reading => {
          this.setState({
            reading: reading,
          });
        });
  };
  componentDidMount() {

    Sensor.getLastReading(this.props.sensor.id)
      .then(
        reading => {
          this.setState({
            reading: reading[0].value,
            isLoading: false
          });
        });
  };


  render() {

    const { reading } = this.state;
    const { sensor } = this.props;

    if (!sensor) {
      return ""
    }

    return (
      <div>

        {(sensor.type === "temperature") ? (
          <p className="toggle-labels">{sensor.device} </p>
        ) : (null)}
        <p className="reading-labels">{sensor.name} </p>
        <button className="reading-div reading-button" onClick={this.handleButtonClick}>
          {reading}
          {sensor.type === "temperature" ? (
            <>
              &#176;C
            </>
          ) : (null)}
          <img src={arrow} alt="click-arrow" className="arrow-icon" />
        </button>
      </div>
    )
  }
}
export default ReadingDetail