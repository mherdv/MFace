import React, { useState } from 'react'
import { emailValidation, lengthValidator } from '$utils/validators';

export default function useLoginForm({ history, onSubmit: userSubmitHandling }) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [submited, setSubmited] = useState(false);


    function onChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;


        setValues({ ...values, [name]: { value, touched: true } })
    }

    function errorHendling({ isSubmited = submited, newValues }) {
        newValues = newValues || values;

        let errors = {};
        let passwordLength = 5;
        let { email = { value: '' }, password = { value: '' } } = newValues;

        let emailValue = (email && email.value) || '';
        let passwordValue = (password && password.value) || '';

        let passwordError = ` password length shuld be minimul 
                ${passwordLength} now is ${passwordValue.length} `;

        let emailError = 'email is not valid';



        let emailNotValid = emailValidation(emailValue);
        let passwordNotValid = !lengthValidator({ value: passwordValue, length: passwordLength });

        if (isSubmited) {

            if (emailNotValid) errors.email = emailError;
            if (passwordNotValid) errors.password = passwordError;


        } else {

            if (email.isBlure && emailNotValid) {
                errors.email = emailError;
            }
            if (password.isBlure && passwordNotValid) {
                errors.password = passwordError;
            }
        }

        setErrors(errors);
        return errors;
    }

    function onBlur(event) {
        const name = event.target.name;
        const newValues = {
            ...values,
            [name]: { ...values[name], isBlure: true }
        }
        setValues(newValues)
        errorHendling({ newValues })
    }

    function onSubmit() {
        setSubmited(true);
        let errors = errorHendling({ isSubmited: true });
        if (Object.keys(errors).length) return;
        userSubmitHandling({ email: values.email, password: values.password })
    }



    return { values, onChange, onSubmit, errors, onBlur }
}
