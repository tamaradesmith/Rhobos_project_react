import React from "react";

function Button(props) {

  const { controller } = props;
  let buttonState = controller.value > 0 ? "On" : "Off"

  const [state, setState] = React.useState(buttonState)


  const handleButtonClick = () => {
    setState(state => state === 'On' ? '0ff' : "On")
    props.onToggle();
  }

  if (!controller) {
    return ""
  }
  return (
    <div>

      <p className="toggle-labels ">
        {controller.name}
      </p>
      <button className="controller-div">
        {state === "On" ? (

          <label className="switch">
            <input type="checkbox" onChange={handleButtonClick} checked />
            <span className="slider round"> </span>
          </label>
        ) : (
            <label className="switch">
              <input type="checkbox" onChange={handleButtonClick} />
              <span className="slider round"> </span>
            </label>
          )}
      </button>
    </div>
  )
}
export default Button;