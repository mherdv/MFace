import React from 'react';
import Header from './Header';
import ProtectedRoute from '$components/ProtectedRoute';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';



function MainPage() {
    return (
        <div>
            <Header />

            <Switch>
                <ProtectedRoute path={"/home"} component={() => <div>some component</div>} />
            </Switch>
            main page <br />
            header <br />
            navbar <br />
            posts <br />
        </div>
    )
}
function mapStateToProps(store) {
    return {

    }
}
export default connect(mapStateToProps)(MainPage)


