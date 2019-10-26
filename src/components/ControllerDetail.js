import React, { useState, useEffect } from 'react'
import { Controller } from '../js/requests'

function ControllerDetail(props) {
  const { controller, includeLed, shows } = props
  let [check, setCheck] = useState('')


  function handleChange(e) {
    const show = e.target.value
    Controller.changeDefaultShow(show)
    setCheck(show)
  }

  function getdefaultshow() {
    shows.forEach(show => {
      if (show.default) {
        setCheck(show.id)
      }
    })
  }

  useEffect(() => {
    getdefaultshow()
  }, [shows])

  return (
    <tr className="ControllerDetails" key={controller.id}>
      <td> {controller.name} </td>
      <td>{controller.type}</td>


      {includeLed === true ? (

        <td id="shows" className="radio-show">
          {shows.map((show, index) => (

            <React.Fragment key={index}>
              <div className="check-div" >
                <input type="radio" key={show.id} value={show.id} name="ledshow" onChange={handleChange} className="check" checked={check === show.id} />
                <label className="radio-name">{show.name}</label>
              </div>
          
            </React.Fragment>
          ))}

        </td>

      ) : (null)}

    </tr>
  )
}

export default ControllerDetail