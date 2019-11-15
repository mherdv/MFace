import React from 'react';

import classes from './select.module.scss';
import PropTypes from 'prop-types';

function Select({ options, errors, selectProps }) {

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
                <label className={classes["select-label"]}>{selectProps.name}</label>
            </div>
            <h3>{errors}</h3>
        </div>

    )
}
Select.defaultProps = {
    selectProps: null,
    options: [],
    errors: ''
}
Select.propTypes = {
    selectProps: PropTypes.object,
    options: PropTypes.array.isRequired,
    errors: PropTypes.string
}


export default Select;