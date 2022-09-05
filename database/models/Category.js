module.exports = (sequlize, dataTypes) => {
    let alias = "Category"
    let cols = {
        category_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },

    }
    let config = {
        tableName: "category",
        timestapms: false
    }
    const Category = sequlize.define(alias, cols, config)

    Category.associate = function (models){
        Category.hasMany(models.Products), {
            as: "products",
            foreignKey: "category_id"
        }
    }


    return Category
}