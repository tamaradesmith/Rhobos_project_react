import React from "react";


function Button(props) {
  const { controller } = props;
  const [state, setState] = React.useState("on")

  const handleButtonClick = () => {
    setState(s => s === 'on' ? 'off' : "on")
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
      <p>{state}</p>
    </button>
  )
}
export default Button