//requiero sequelize y los datos privados en .env
const {Sequelize}= require("sequelize");
require('dotenv').config();
const {user_en_pg,password_DB,host_del_DB,nombre_DB} = process.env
const Post= require("./src/models/post")



//instancio sequelize para tener acceso a la base de datos
const dataBase= new Sequelize(`postgres://${user_en_pg}:${password_DB}@${host_del_DB}/${nombre_DB}`, {logging: false});



Post(dataBase);
/* todo esto "modularizado" (en otro archivo)
const {DataTypes} = require('sequelize');

module.exports= (dataBase)=>{
    dataBase.define("post",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}*/




module.exports={
    dataBase,
    ...dataBase.models
}