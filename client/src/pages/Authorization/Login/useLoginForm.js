// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { emailValidation, lengthValidator } from "$utils/validators";

export default function useLoginForm({ onSubmit: userSubmitHandling }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submited, setSubmited] = useState(false);

  function onChange(event) {
    const { target } = event;
    const { name } = target;
    const { value } = target;

    setValues({ ...values, [name]: { value, touched: true } });
  }

  function errorHendling({ isSubmited = submited, newValues = values }) {
    const errorObject = {};
    const passwordLength = 5;
    const { email = { value: "" }, password = { value: "" } } = newValues;

    const emailValue = (email && email.value) || "";
    const passwordValue = (password && password.value) || "";

    const passwordError = ` password length shuld be minimul 
                ${passwordLength} now is ${passwordValue.length} `;

    const emailError = "email is not valid";

    const emailNotValid = emailValidation(emailValue);
    const passwordNotValid = !lengthValidator({
      value: passwordValue,
      length: passwordLength
    });

    if (isSubmited) {
      if (emailNotValid) errorObject.email = emailError;
      if (passwordNotValid) errorObject.password = passwordError;
    } else {
      if (email.isBlure && emailNotValid) {
        errorObject.email = emailError;
      }
      if (password.isBlure && passwordNotValid) {
        errorObject.password = passwordError;
      }
    }

    setErrors(errorObject);
    return errorObject;
  }

  function onBlur(event) {
    const { name } = event.target;
    const newValues = {
      ...values,
      [name]: { ...values[name], isBlure: true }
    };
    setValues(newValues);
    errorHendling({ newValues });
  }

  function onSubmit() {
    setSubmited(true);
    const errorsObject = errorHendling({ isSubmited: true });
    if (Object.keys(errorsObject).length) return;
    userSubmitHandling({ email: values.email, password: values.password });
  }

  return { values, onChange, onSubmit, errors, onBlur };
}
