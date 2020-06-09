import React from "react";
import "./style.css";


function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">{props.children}
        <p className="title">Get Points By Clicking On An Image But Don't Click More Than Once!</p>
      </div>
    </div>
  )
}

export default Jumbotron;