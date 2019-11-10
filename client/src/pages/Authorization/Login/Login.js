import React from 'react'
import MaterialStyleInpot from '$components/MaterialStyleInpot';
import classes from './login.module.scss'
import MaterialStyleButton from '$components/MaterialStyleButton';

export default function Login() {


    return (
        <div className={classes.formContainer}>
            <MaterialStyleInpot placeholder={"email"} />
            <MaterialStyleInpot placeholder={"password"} />

            <MaterialStyleButton value={'Login'} />
        </div>
    )
}
