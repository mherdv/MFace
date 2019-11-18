import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./header.module.scss";

import { Logo } from "$components/svg";

import { logouthAction as _logouthAction } from "$store/actions/user";
import SearchInput from "$components/SearchInput";
import useSearchUser from "./useSearchUser";
import {
  userSearchAction as _userSearchAction,
  userSearchClearAction as _userSearchClearAction
} from "$store/actions/userSearch";
import SearchUsers from "./SearchUsers";

function Header({
  logouthAction,
  userSearchAction,
  userSearch,
  userSearchClearAction
}) {
  const { inputValue, onChange } = useSearchUser({
    userSearchAction,
    userSearchClearAction
  });
  return (
    <div className={classes.headerContainer}>
      <header>
        <div>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={classes.active}>
                <Logo style={{ width: "30px", height: "30px" }} />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/home" activeClassName={classes.active}>
                home
              </NavLink>
            </li>
            <li>
              {/* search user  */}
              <SearchInput
                value={inputValue}
                onChange={onChange}
                items={<SearchUsers users={userSearch.users} />}
              />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {/* FIXME: logouth is incorrect ? */}
              <NavLink to="/" exact onClick={() => logouthAction()}>
                logouth
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
function mapStateToProps({ userSearch }) {
  return { userSearch };
}

Header.propTypes = {
  logouthAction: PropTypes.func.isRequired,
  userSearchAction: PropTypes.func.isRequired,
  userSearchClearAction: PropTypes.func.isRequired,
  userSearch: PropTypes.instanceOf(Object).isRequired
};
// userSearchAction({ fullName: "as" })
export default connect(mapStateToProps, {
  logouthAction: _logouthAction,
  userSearchAction: _userSearchAction,
  userSearchClearAction: _userSearchClearAction
})(Header);
