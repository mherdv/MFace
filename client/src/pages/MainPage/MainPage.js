import React from 'react';
import Header from './Header';
import ProtectedRoute from '$components/ProtectedRoute';

import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import Home from '$pages/Home';
import InitialPage from '$pages/InitialPage';



function MainPage() {
    console.log(InitialPage)
    return (
        <div>
            <Header />

            <Switch>

                <ProtectedRoute path={"/"} exact component={InitialPage} />
                <ProtectedRoute path={"/home"} exact component={Home} />
            </Switch>
            {/* main page <br />
            header <br />
            navbar <br />
            posts <br /> */}
        </div>
    )
}
function mapStateToProps(store) {
    return {

    }
}
export default connect(mapStateToProps)(MainPage)


