import React from 'react';
import classes from './materialStyleInpot.module.scss'

export default function MaterialStyleInpot({ type, placeholder, onChange, value }) {
    return (
        <div className={classes.group}>
            <input type={type} value={value} required={true} onChange={onChange} />
            {/* <span className={classes.highlight}></span> */}
            <span className={classes.bar}></span>
            <label>{placeholder}</label>
        </div>
    )
}

MaterialStyleInpot.defaultProps = {
    type: "text",
    value: "",
    placeholder: "default",
    onChange: () => { }
}