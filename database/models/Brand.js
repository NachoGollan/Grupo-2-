
module.exports = (sequlize, dataTypes) => {
    let alias = "Brand"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand_name:{
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "brand",
        timestamps: false
    }
    const Category = sequlize.define(alias, cols, config)

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id'
        })
    }
 
    return Category
}