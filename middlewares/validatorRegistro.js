const { check } = require ("express-validator");

const validatorReg = [
    check('email').notEmpty().isEmail(),
    check('password').notEmpty().isStrongPassword({ minLength: 8, minNumbers: 1, minLowercase: 1, minUppercase: 1, minSymbols: 1 }),
    check('name').notEmpty().isLength({ min: 2}),
    check('lastName').notEmpty().isLength({ min: 2}),
    check('image').notEmpty().custom((image)=>{
            if ( !image.toLowerCase().endsWith("jpg") || !image.toLowerCase().endsWith("png") || !image.toLowerCase().endsWith("jpeg") || !image.toLowerCase().endsWith("gif") ) {
                throw new Error("insertar una imagen valida");
            }
    })
];

module.exports = validatorReg;