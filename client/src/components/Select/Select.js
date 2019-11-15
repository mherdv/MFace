import React from 'react';

import classes from './select.module.scss';

export default function Select({ onChange, value, options, errors, selectProps }) {

    return (
        <div className={classes.wrapper}>
            <div className={classes.select} >
                <select className={classes["select-text"]} required {...selectProps}>
                    {options.map((option, index) => {
                        return <option value={option.value} key={"option__" + option.name}> {option.name}</option>
                    })}


                </select>
                <span className={classes["select-highlight"]}></span>
                <span className={classes["select-bar"]}></span>
                <label className={classes["select-label"]}>Gender</label>
            </div>
            <h3>{errors}</h3>
        </div>

    )
}
Select.defaultProps = {
    onChange: null,
    value: null,
    onBlur: null,
    options: [],
    errors: ''
}
