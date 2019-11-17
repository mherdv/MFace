export const emailValidation = email => {
  // eslint-disable-next-line no-useless-escape
  const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailRegexp.test(email);

  return !isValid;
};

export const lengthValidator = ({ value, length }) => {
  return value.length >= length;
};
