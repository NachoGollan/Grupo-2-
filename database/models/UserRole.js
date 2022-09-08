module.exports = (sequlize, dataTypes) => {
    let alias = "UserRole"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name:{
            type: dataTypes.STRING
        }

    }
    let config = {
        tableName: "users_roles",
        timestamps: false
    }
    const UserRole = sequlize.define(alias, cols, config)

    UserRole.associate = function (models){
        UserRole.hasMany(models.User, {
            as: "users",
            foreignKey: "role_id"
        })
    }

    return UserRole;
}