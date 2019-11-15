import React from "react";
import Login from './Login';
import Registration from './Registration';
import classes from './authorization.module.scss';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Logo } from '$components/svg';



function Authorization({ match, userToken }) {
    if (userToken) return <Redirect to={'/'} />
    return (
        <>
            <div className={classes.navbarContainer}>
                <div className={classes.headWrapper}>

                    <div className={classes.logoContainer}> <Logo style={{ width: '30px', height: '30px' }} /></div>
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

Authorization.propTypes = {
    match: PropTypes.object.isRequired,
    userToken: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default connect(mapStateToProps)(Authorization)