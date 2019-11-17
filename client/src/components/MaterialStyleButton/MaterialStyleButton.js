import React from "react";
import PropTypes from "prop-types";
import classes from "./materialStyleButton.module.scss";

function MaterialStyleButton({ onClick, value, type }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes.btn} type={type} onClick={onClick}>
      <span>{value}</span>
    </button>
  );
}

MaterialStyleButton.defaultProps = {
  onClick: null,
  type: "button",
  value: "button"
};

MaterialStyleButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

export default MaterialStyleButton;
