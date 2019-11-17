import React from "react";
import PropTypes from "prop-types";

import classes from "./select.module.scss";

function Select({ options, errors, selectProps }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.select}>
        <select className={classes["select-text"]} required {...selectProps}>
          {options.map(option => {
            return (
              <option value={option.value} key={`option__${option.name}`}>
                {" "}
                {option.name}
              </option>
            );
          })}
        </select>
        <span className={classes["select-highlight"]} />
        <span className={classes["select-bar"]} />
        <label htmlFor={{}} className={classes["select-label"]}>
          {selectProps.name}
        </label>
      </div>
      <h3>{errors}</h3>
    </div>
  );
}
Select.defaultProps = {
  selectProps: {},
  errors: ""
};
Select.propTypes = {
  selectProps: PropTypes.instanceOf(Object),
  options: PropTypes.instanceOf(Array).isRequired,
  errors: PropTypes.string
};

export default Select;
