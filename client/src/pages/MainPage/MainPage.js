import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

function MainPage() {
    return (
        <div>
            <Header />
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


