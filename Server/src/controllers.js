/*let id= 1;
let mensajes= []*/

//requiero los modelos para usar los metodos(create, find, etc...) en ellos para acceder y modificar a la base de datos
const {post}= require("../DataBase");
const nodemailer= require("nodemailer")


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
    var transtorpe= nodemailer.createTransport({//crea un "transporte", se usa para indicar quien lo envia
        host:"smtp.gmail.com",
        port:465,
        secure:true, //debe ser true sí el port es 465
        auth:{
            user:"caldesanche@gmail.com",
            pass:"uwnehfrwtlqehqlo" //contraseña de app
        }
    })

    const destino={//la info y el destinatario
        from:"yo",
        to:"caldesanche@gmail.com",
        subject:"notificacion de: ya le estoy agarrando la onda a esto",
        text:req.body.mensaje
    }

    transtorpe.sendMail(destino, (error, info)=>{
        if(error){
            res.status(500).send(error.message)
        }else{
            console.log("se ha enviado")
        }
    }
    )


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