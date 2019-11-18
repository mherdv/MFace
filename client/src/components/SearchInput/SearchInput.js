import React from "react";
import PropTypes from "prop-types";

import classes from "./searchInput.module.scss";

function SearchInput({ type, value, onChange, items }) {
  return (
    <div className={classes.wrapper}>
      <input type={type} value={value} onChange={onChange} />
      {items}
    </div>
  );
}

SearchInput.defaultProps = {
  type: "text",
  items: []
};

SearchInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Array)
};

export default SearchInput;
