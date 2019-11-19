import React from "react";
import PropTypes from "prop-types";
import classes from "./searchUsers.module.scss";

function SearchUsers({ users, onClick }) {
  return users.length ? (
    <div className={classes.wrapper}>
      <ul>
        {users.map(({ fullName, _id: id }) => (
          // TODO: reol attribute
          <li key={id} onClick={onClick} role="presentation">
            {fullName}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
SearchUsers.defaultProps = {
  users: []
};
SearchUsers.propTypes = {
  users: PropTypes.instanceOf(Array),
  onClick: PropTypes.func.isRequired
};

export default SearchUsers;
