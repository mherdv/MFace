import React from 'react';
import classes from './materialStyleButton.module.scss';

export default function MaterialStyleButton({ onClick, background, color, value, type }) {

    return (
        <button className={classes.btn} type={type} onClick={onClick}><span>{value}</span></button>
    )
}

MaterialStyleButton.defaultProps = {
    onClick: null,
    background: '',
    color: 'blue',
    type: "button",
    value: 'button'
}
