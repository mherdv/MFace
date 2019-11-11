import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { registrationAction } from '$store/actions/user.js';
import MaterialStyleInpot from '$components/MaterialStyleInpot';

import classes from './registration.module.scss';
import MaterialStyleButton from '$components/MaterialStyleButton';
import DatePicker from '$components/DatePicker';
import Select from '$components/Select';
function Registration() {
    // TODO: use formik

    // TODO: select validation
    // TODO: date validation 

    // TODO: clearing code 

    // TODO: set min and max dates
    return (

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
                dateOfBirthday: Yup.date('invalid date passing').required("Required").default(null),


            })}

            onSubmit={(values, { setSubmitting }) => {

            }}

        >
            {(formik) => {
                return (
                    <form onSubmit={formik.handleSubmit}>

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

                                errors={formik.errors.dateOfBirthday}

                            />
                             <Select options={[{ name: "mal", value: "0" }, { name: "femall", value: "1" }]} />


                        </div>
                        <MaterialStyleButton type="submit" />

                    </form>)
            }}
        </Formik >
    )
}

function mapStateToProps({ registration }) {
    let { status, loading, errorText } = registration
    return {
        status, loading, errorText
    }
}


export default connect(mapStateToProps, { registrationAction })(Registration);

