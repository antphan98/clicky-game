import React from "react";
import PropTypes from 'prop-types';
import "./Card.css";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

const Card = ({
    id,
    name,
    image

}) => (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );

Card.propTypes = propTypes;

export default Card;
