
module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
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
        details:{
            type: dataTypes.STRING
        },
        category_id:{
            type: dataTypes.INTEGER,
        },
        brand_id:{
            type: dataTypes.INTEGER,
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
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)


    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
        Product.belongsTo(models.Category, {
            as: 'brand',
            foreignKey: 'brand_id'
        })
    }
 
    return Product
}