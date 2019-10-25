import React from 'react'
import { Controller } from '../js/requests'

function ControllerDetail(props) {
  const { controller, includeLed, shows } = props

  function handleChange(e) {
    const show = e.target.value
    Controller.changeDefaultShow(show)
  }

  return (
    <tr className="ControllerDetails" key={controller.id}>
      <td> {controller.name} </td>
      <td>{controller.type}</td>


      {includeLed === true ? (

        <td id="shows" className="radio-show">
          {shows.map(show => (
            <div className="check-div">
              <input type="radio" key={show.id} value={show.id} name="ledshow" onChange={handleChange} className="check" />
              <label>{show.name}</label>
            </div>
          ))}

        </td>

      ) : (null)}

    </tr>
  )
}

export default ControllerDetail