import React, { useState } from 'react';
import * as Yup from 'yup';
import MaterialStyleInpot from '$components/MaterialStyleInpot';
import classes from './registration.module.scss';
import MaterialStyleButton from '$components/MaterialStyleButton';
import DatePicker from '$components/DatePicker';
import Select from '$components/Select';
import Preloader from '$components/Preloader';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { connect } from 'react-redux';
import { registrationAction } from '$store/actions/user.js';



function Registration({
    registrationAction,
    errorText,
    status,
    loading
}) {

    return (!status ?

        <Formik
            initialValues={{ email: '', password: '', gender: 0, dateOfBirthday: null, surname: '', name: '' }}

            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Required'),
                surname: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email addresss`')
                    .required('Required'),
                password: Yup.string()
                    .min(5, 'password is too short mast be minimul 5 simbols').required('Required'),
                dateOfBirthday: Yup.date('invalid date passing').required("Required"),
                gender: Yup.number('error').required('Required')


            })}

            onSubmit={(values) => {
                registrationAction(values);

            }}

        >
            {(formik) => {

                return (
                    <form onSubmit={formik.handleSubmit} className={classes.form}>
                        <h3>{errorText && !status ? errorText : null}</h3>
                        <div className={classes.container}>

                            <MaterialStyleInpot {...formik.getFieldProps('name')}

                                errors={formik.touched.name && formik.errors.name}
                            />
                            <MaterialStyleInpot {...formik.getFieldProps('surname')}
                                errors={formik.touched.surname && formik.errors.surname}
                            />
                            <MaterialStyleInpot {...formik.getFieldProps('email')}
                                errors={formik.touched.email && formik.errors.email}
                            />

                            <MaterialStyleInpot {...formik.getFieldProps('password')}
                                errors={formik.touched.password && formik.errors.password}
                            />

                            <DatePicker
                                {...formik.getFieldProps('dateOfBirthday')}
                                errors={formik.errors.dateOfBirthday && "Required"}
                                onBlur={() => {
                                    let { onBlur, name } = formik.getFieldProps('dateOfBirthday')
                                    setTimeout(() => { onBlur({ target: { name } }); }, 0)
                                }}
                                minDate={new Date('1920', '03' - 1, '11')}
                                maxDate={new Date((new Date().getFullYear() - 5) + '', '1', '0')}
                            />

                            <Select
                                selectProps={formik.getFieldProps('gender')}
                                options={[{ name: "", value: '' }, { name: "mal", value: 1 }, { name: "femall", value: 2 }]}
                                errors={formik.touched.gender && !formik.values.gender && "Required"}
                            />


                        </div>
                        {loading ?
                            <Preloader /> :
                            <MaterialStyleButton type="submit" />}

                    </form>)
            }}
        </Formik > : null
    )
}

function mapStateToProps({ registration }) {
    let { status, loading, errorText } = registration;
    return {
        status, loading, errorText
    }
}
Registration.propTypes = {
    registrationAction: PropTypes.func.isRequired,
    errorText: PropTypes.string,
    status: PropTypes.number,
    loading: PropTypes.bool.isRequired
}



export default connect(mapStateToProps, { registrationAction })(Registration);

