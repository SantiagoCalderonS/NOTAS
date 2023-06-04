const {DataTypes} = require('sequelize');

module.exports= (dataBase)=>{
    dataBase.define("post",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {timestamps: false})
}