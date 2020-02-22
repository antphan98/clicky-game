import React from "react";
import "./Card.css";


const Card = props => (
    <div className="card" onClick={() => props.cardClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id}/>
      </div>
    </div>
  );

export default Card;
