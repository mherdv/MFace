import React, { useState } from 'react';
import MaterialStyleInpot from '$components/MaterialStyleInpot';
import classes from './login.module.scss';
import MaterialStyleButton from '$components/MaterialStyleButton';
import useLoginForm from './useLoginForm';
import { connect } from 'react-redux';
import { loginAction } from "$store/actions/user";

import { Redirect } from 'react-router-dom';
import Preloader from '$components/Preloader';


function Login({ loginAction, isLoading, errorText, userToken }) {

    const { onChange, onSubmit, values, errors, onBlur } = useLoginForm({ onSubmit: loginAction });

    // if (userToken) return <Redirect to={'/'} />
    return (

        <div className={classes.formContainer}>

            {errorText ? <h4 className={classes.errorTest}>{errorText}</h4> : null}
            <MaterialStyleInpot
                placeholder={"email"}
                value={(values.email && values.email.value) || ''}
                name="email"
                onChange={onChange}
                errors={errors.email}
                onBlur={onBlur}
            />
            <MaterialStyleInpot
                placeholder={"password"}
                value={(values.password && values.password.value) || ''}
                type="password"
                name="password"
                onChange={onChange}
                errors={errors.password}
                onBlur={onBlur}
            />
            {isLoading ? <Preloader /> :

                <MaterialStyleButton value={'Login'} onClick={onSubmit} />
            }
        </div>
    )
}



function mapStateToProps(store) {
    return {
        isLoading: store.user.isLoading,
        errorText: store.user.errorText,
        userToken: store.user.token
    }
}

export default connect(mapStateToProps, { loginAction })(Login)
