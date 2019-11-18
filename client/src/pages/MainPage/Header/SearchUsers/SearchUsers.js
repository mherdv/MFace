import React from "react";
import PropTypes from "prop-types";
import classes from "./searchUsers.module.scss";

function SearchUsers({ users }) {
  return users.length ? (
    <div className={classes.wrapper}>
      <ul>
        {users.map(item => (
          <li>{item.fullName}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
SearchUsers.defaultProps = {
  users: []
};
SearchUsers.propTypes = {
  users: PropTypes.instanceOf(Array)
};

export default SearchUsers;
