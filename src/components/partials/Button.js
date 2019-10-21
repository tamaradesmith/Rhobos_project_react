import React from "react";
import { Controller } from "../../js/requests"

function Button(props) {
  const { controller } = props;
  let buttonState = controller.value > 0 ? "On" : "Off"
  const [state, setState] = React.useState(buttonState)

  // console.log(buttonState)
  const handleButtonClick = () => {
    setState(buttonState => buttonState === 'On' ? '0ff' : "On")
    props.onToggle();
  }
  if (!controller) {
    return ""
  }
  return (
    <button className="reading-div" onClick={handleButtonClick}>
      <p>

        {controller.name}
      </p>
      {/* <p>{buttonState}</p> */}
      <p>{state}</p>
    </button>
  )
}
export default Button