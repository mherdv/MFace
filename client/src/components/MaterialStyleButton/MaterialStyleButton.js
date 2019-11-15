import React from 'react';
import classes from './materialStyleButton.module.scss';
import PropTypes from 'prop-types';

function MaterialStyleButton({ onClick, value, type }) {

    return (
        <button className={classes.btn} type={type} onClick={onClick}><span>{value}</span></button>
    )
}

MaterialStyleButton.defaultProps = {
    onClick: null,
    type: "button",
    value: 'button'
}

MaterialStyleButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default MaterialStyleButton


