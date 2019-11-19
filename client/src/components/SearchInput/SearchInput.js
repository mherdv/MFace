import React from "react";
import PropTypes from "prop-types";

import classes from "./searchInput.module.scss";

function SearchInput({ type, value, onChange, items, onBlur, onFocus }) {
  return (
    <div className={classes.wrapper}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {items}
    </div>
  );
}

SearchInput.defaultProps = {
  type: "text",
  items: [],
  onBlur: null,
  onFocus: null
};

SearchInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  items: PropTypes.instanceOf(Object)
};

export default SearchInput;
