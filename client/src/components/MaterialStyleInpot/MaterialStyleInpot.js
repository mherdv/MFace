import React from "react";
import PropTypes from "prop-types";
import classes from "./materialStyleInpot.module.scss";

export default function MaterialStyleInpot({
  type,
  placeholder,
  onChange,
  value,
  errors,
  name,
  onBlur
}) {
  return (
    <div className={classes.group}>
      <input
        type={type}
        value={value}
        name={name}
        required
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className={classes.bar} />
      <label htmlFor={{}}>{placeholder || name}</label>
      {errors ? (
        <div className={classes.errorContainer}>
          <h3>{errors}</h3>
        </div>
      ) : null}
    </div>
  );
}

MaterialStyleInpot.defaultProps = {
  type: "text",
  name: "text",
  value: "",
  placeholder: "",
  errors: "",
  onBlur: () => {}
};
MaterialStyleInpot.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string,
  onBlur: PropTypes.func
};
