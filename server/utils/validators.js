module.exports.emailValidator = (email) => {

    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValid = emailRegexp.test(email);

    if (!isValid) return { status: 0, errorMessage: 'invalid email' };
    return { status: 1 };
}