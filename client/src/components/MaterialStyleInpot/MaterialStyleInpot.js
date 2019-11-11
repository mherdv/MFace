import React from 'react';
import classes from './materialStyleInpot.module.scss'

export default function MaterialStyleInpot({ type, placeholder, onChange, value, errors, name, onBlur }) {
    return (
        <div className={classes.group}>
            <input
                type={type}
                value={value}
                name={name} required={true}
                onChange={onChange}
                onBlur={onBlur}
            />
            {/* <span className={classes.highlight}></span> */}
            <span className={classes.bar}></span>
            <label>{placeholder || name}</label>
            {errors ?
                <div className={classes.errorContainer}><h3>{errors}</h3></div>
                : null}
        </div>
    )
}

MaterialStyleInpot.defaultProps = {
    type: "text",
    name: "text",
    value: "",
    placeholder: "",
    onChange: null,
    errors: "",
    onBlur: null
}