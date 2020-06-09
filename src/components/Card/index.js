import React from "react";
import "./style.css";


function Card(props) {
  return (
      <div className={"card " + (props.Clicked)} onClick={() => props.handleClick( props.id)} >  
          <div className="img-container">
              <img alt={props.name} src={props.image} />
          </div>
          <div className="img-content">
              <ul>
                  <li>
                      <strong>Name:</strong>{props.name}
                  </li>
               
              </ul>
          </div>
      </div >
  )
}




//<span onClick={() => props.removeFriend(props.id)} className="remove"></span>
export default Card;
