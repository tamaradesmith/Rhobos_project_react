import React from 'react'

function ControllerDetail(props) {
  return (
    <main>

      {props.even === true ? (
        <div className="grid row">
          <p>
            Type:
        </p>
          <p >
            {props.type}
          </p>
        </div>
      ) : (
          <div className="grid ">
            <p>
              Type:
        </p>
            <p >
              {props.type}
            </p>
          </div>
        )}

    </main>
  )
}

export default ControllerDetail