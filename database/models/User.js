module.exports = (sequlize, dataTypes) => {
    let alias = "User"
    let cols = {
        user_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name:{
            type: dataTypes.STRING
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
            unique: true,
        },
        passwd:{
            type: dataTypes.STRING
        },
        birthday: {
            type: dataTypes.DATE
        },
        image:{
            type: dataTypes.BLOB
        },
        role_id:{
            type: dataTypes.INTEGER,
            
        }
    }
    let config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequlize.define(alias, cols, config)

    User.associate = function (models){
        User.belongsTo(models.UserRole, {
            as: "users",
            foreignKey: "role_id"
        })
    }

    return User
}
