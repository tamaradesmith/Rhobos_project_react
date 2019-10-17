import React from "react";


function Button(props) {
  const { controller } = props;
  if (!controller) {
    return ""
  }
  return (
    <main className="reading-div">
      <p onClick={props.onToggle} >
        {controller.name}
      </p>
    </main>
  )
}
export default Button