const server = require("./src/app")
//requiero la database
const {dataBase}= require("./DataBase")



// sincronizo la base, esto es una promesa
dataBase.sync({force:true}).then(()=>{
    server.listen(3001, ()=>console.log("server montado"));
})



/*
dataBase.sync({force:true})

server.listen(3001, ()=>console.log("server montado"));
*/