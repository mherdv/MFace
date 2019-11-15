import React from 'react'
import classes from './header.module.scss';

import { Logo } from '$components/svg';

export default function Header() {


    return (
        <div className={classes.headerContainer}>

            <header >
                <Logo style={{ width: '30px', height: '30px' }} />
            </header>
        </div>

    )
}
