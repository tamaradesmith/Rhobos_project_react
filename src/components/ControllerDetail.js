import React from 'react'

function ControllerDetail(props) {
  const { controller } = props
  return (
    <main>
      {props.even === true ? (
        <div className="grid row">
          <p>Name: {controller.name} </p>
          <p> type:{controller.type}</p>
        </div>
      ) : (
          <div className="grid ">
            <p>Name: {controller.name} </p>
            <p> type:{controller.type}</p>
          </div>
        )}

    </main>
  )
}

export default ControllerDetail