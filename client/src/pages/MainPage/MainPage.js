import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import ProtectedRoute from "$components/ProtectedRoute";

import Home from "$pages/Home";
import InitialPage from "$pages/InitialPage";


function MainPage({ userToken }) {
  if (!userToken) return <Redirect to="/" />;
  return (
    <div>
      <Header />

      <Switch>
        <ProtectedRoute path="/" exact component={InitialPage} />
        <ProtectedRoute path="/home" exact component={Home} />
      </Switch>
      {/* main page <br />
            header <br />
            navbar <br />
            posts <br /> */}
    </div>
  );
}
function mapStateToProps(store) {
  return {
    userToken: store.user.token
  };
}

MainPage.defaultProps = {
  userToken: null
};

MainPage.propTypes = {
  userToken: PropTypes.string
};
export default connect(mapStateToProps)(MainPage);
