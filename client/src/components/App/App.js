import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Authorization from '$src/pages/Authorization';
import ProtectedRoute from '$components/ProtectedRoute';
import MainPage from '$src/pages/MainPage';


function App({ user }) {

  const { token } = user;
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/authorization" component={Authorization} />
          <ProtectedRoute path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}
function mapStateToProps({ user }) {
  return {
    user
  }
}
export default connect(mapStateToProps)(App);
