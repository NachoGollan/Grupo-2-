const { check } = require ("express-validator");

const validatorLogin = [
    check('email').notEmpty().isEmail(),
    check('password').notEmpty()
];

module.exports = validatorLogin;