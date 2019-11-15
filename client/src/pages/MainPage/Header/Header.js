import React from 'react'
import classes from './header.module.scss';

import { NavLink } from 'react-router-dom';
import { Logo } from '$components/svg';

import { logouthAction } from '$store/actions/user';
import { connect } from 'react-redux';


function Header({ logouthAction }) {


    return (
        <div className={classes.headerContainer}>

            <header >
                <div>
                    <ul>
                        <li>
                            <NavLink to={'/'} exact activeClassName={classes.active} ><Logo style={{ width: '30px', height: '30px' }} /></NavLink>

                        </li>
                        <li>
                            <NavLink to={'/home'} exact activeClassName={classes.active} >home</NavLink>
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
                            <NavLink to={'/'} exact onClick={() => logouthAction()}>log ouths</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </div >

    )
}
function mapStateToProps(store) {
    return {

    }
}

export default connect(mapStateToProps, { logouthAction })(Header);