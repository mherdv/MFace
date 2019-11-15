import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';
import { getToken } from '$utils/token';






function ProtectedRoute({ component: Component, ...rest }) {
    const token = getToken();

    return (<Route

        {...rest}
        render={props => {
            return token ? (<Component {...props} />) : (<Redirect
                to={{
                    pathname: "/authorization",
                    state: { from: props.location }
                }}
            />)
        }}

    >
    </Route>)

}


ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired
}


export default ProtectedRoute