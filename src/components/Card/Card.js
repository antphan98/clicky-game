import React from "react";
import "./Card.css";


const Card = props => (
    <div className="card" onClick={() => props.cardClick(props.id)}>
      <div className="img-container">
        <img alt={name} src={image} id={id}/>
      </div>
    </div>
  );

export default Card;
