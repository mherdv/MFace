import React from "react";
import { connect } from 'react-redux';

import { Route, Link, Switch, NavLink } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';

import classes from './authorization.module.scss'



function Authorization({ match, userToken }) {
    if (userToken) return <Redirect to={'/'} />
    return (
        <>
            <div className={classes.navbarContainer}>
                <div> authorization</div>
                <nav >
                    <ul className={classes.navbar}>
                        <li>
                            <NavLink to={match.path} exact activeClassName={classes.activeLink}>login</NavLink>
                        </li>
                        <li>
                            <NavLink to={match.path + "/registration"} exact activeClassName={classes.activeLink}>registration</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path={match.path + "/registration"} component={Registration} />
                <Route path={match.path} component={Login} />
            </Switch>
        </>

    )

}
function mapStateToProps(store) {
    return {
        userToken: store.user.token,
        registration: store.registration
    }
}

export default connect(mapStateToProps)(Authorization)