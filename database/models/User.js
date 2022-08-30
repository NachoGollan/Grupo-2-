module.exports = (sequlize, dataTypes) => {
    let alias = "Users"
    let cols = {
        users_id:{
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
            foreignKey: true
        }
    }
    let config = {
        tableName: "users",
        timestapms: false
    }
    const Usuario = sequlize.define(alias, cols, config)

    return Usuario
}