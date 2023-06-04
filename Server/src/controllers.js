/*let id= 1;
let mensajes= []*/

//requiero los modelos para usar los metodos(create, find, etc...) en ellos para acceder y modificar a la base de datos
const {post}= require("../DataBase")


async function ver (req,res){
    try {
        const envios = await post.findAll() //arreglar { where: ["id > ?", 1] }
       
        if(!envios.length){
             throw Error("no hay mensajes nuevos")
        }else{
            res.status(200).json({posteados: envios})
        }
       
    } catch (error) {
         res.status(500).send("ya te vas a mejorar")
    }
    
}


//sequelize esta basado en promesas
async function poner(req,res){
   if(req.body.mensaje){
    const envio= await post.create({
        text: req.body.mensaje
    })
    /*let correo= {
        id: id++,
        texto: req.body.mensaje
    }
    mensajes.push(correo)*/
    res.status(200).send("mensaje enviado")
    //             .json(envio)->envia un "objeto"
}else{
    res.status(500).send("necesita enviar algo")
}

}

module.exports={
    ver,
    poner
}