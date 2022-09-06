
module.exports = (sequlize, dataTypes) => {
    let alias = "Category"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cat_name:{
            type: dataTypes.STRING
        },

    }
    let config = {
        tableName: "category",
        timestamps: false
    }
    const Category = sequlize.define(alias, cols, config)

    Category.associate = function (models){
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "category_id"
        })
    }

    return Category
}