import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '$utils/token';


export default function ProtectedRoute({ component: Component, ...rest }) {
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