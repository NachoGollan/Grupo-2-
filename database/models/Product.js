
module.exports = (sequlize, dataTypes) => {
    let alias = "Products"
    let cols = {
        product_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name:{
            type: dataTypes.STRING
        },
        descript:{
            type: dataTypes.STRING
        },
        category_id:{
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        brand_id:{
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        offer:{
            type: dataTypes.BOOLEAN
        },
        discount: {
            type: dataTypes.DECIMAL
        },
        price:{
            type: dataTypes.DECIMAL
        },
        imported:{
            type: dataTypes.BOOLEAN
        },
        image:{
            type: dataTypes.DECIMAL
        }
    }
    let config = {
        tableName: "products",
        timestapms: false
    }
    const Producto = sequlize.define(alias, cols, config)

    return Producto
}