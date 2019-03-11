import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


const Location = ({ city }) => (
    <div className="locationCont">
        <h1>{ city }</h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired, // esta parametro verifica si el valor pasado es un string y que no sea un valor nulo
};

export default Location;