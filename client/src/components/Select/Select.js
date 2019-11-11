import React from 'react';

import classes from './select.module.scss';

export default function Select({ onChange, value, options }) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.select} onChange={onChange} value={value}>
                <select className={classes["select-text"]} required>
                    <option value=""></option>
                    {options.map((option, index) => {
                        console.log(option)
                        return <option value={option.value} key={"option__" + option.name}> {option.name}</option>
                    })}


                </select>
                <span className={classes["select-highlight"]}></span>
                <span className={classes["select-bar"]}></span>
                <label className={classes["select-label"]}>Gender</label>
            </div>

        </div>

    )
}
Select.defaultProps = {
    onChange: null,
    value: null,
    options: []
}
