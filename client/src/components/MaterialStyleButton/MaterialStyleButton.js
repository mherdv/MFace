import React from 'react';
import classes from './materialStyleButton.module.scss';

export default function MaterialStyleButton({ onCLick, background, color, value }) {
    console.log(classes[color])
    return (
        <button className={classes.btn} type="button"><span>{value}</span></button>
    )
}

MaterialStyleButton.defaultProps = {
    onCLick: null,
    background: '',
    color: 'blue',
    value: 'button'
}
