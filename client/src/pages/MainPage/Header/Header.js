import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classes from "./header.module.scss";

import { Logo } from "$components/svg";

import { logouthAction as _logouthAction } from "$store/actions/user";

function Header({ logouthAction }) {
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
              <input type="text" />
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
function mapStateToProps(/* store */) {
  return {};
}

Header.propTypes = {
  logouthAction: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logouthAction: _logouthAction })(
  Header
);
