import React from 'react'

function ControllerDetail(props) {
  const { controller } = props
  return (
    <tr className="ControllerDetails" key={controller.id}>
      <td> {controller.name} </td>
      <td>{controller.type}</td>
    </tr>
  )
}

export default ControllerDetail