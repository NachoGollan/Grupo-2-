const { check } = require ("express-validator");

const validatorProduct = [
    check('name').notEmpty().isLength({min: 5}),
    check('description').isLength({min: 20}),
    check('image').notEmpty().custom((image)=>{
        if ( !image.toLowerCase().endsWith("jpg") || !image.toLowerCase().endsWith("png") || !image.toLowerCase().endsWith("jpeg")) {
            throw new Error("insertar una imagen valida");
        }
    })
];

module.exports = validatorProduct;