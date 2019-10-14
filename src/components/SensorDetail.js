import React from "react"
import '../styles/details.scss'

function SensorDetail(props) {

  return (
    <main className="SensorDetail">

      {   props.even === true ?(
        <div className="grid row">
        <p>
              Type:
        </p>
            <p >
              {props.type}
            </p>
          </div>
          ) :(
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


      export default SensorDetail