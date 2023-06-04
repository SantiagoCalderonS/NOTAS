import axios from "axios"
import style from "./postal.module.css"
import { useEffect, useState } from "react"

export function Postal (){
    // crea un estado local del componente donde se guarda info
    const [texto, settexto] = useState({mensaje:""})
    const [envio, setenvio] = useState(false)

    function Cambio_input(event){//funcion que se efectua cuando hay algun cambio en la etiqueta input, recibe el evento como parametro
        settexto({...texto, mensaje: event.target.value})
    }

    async function post (){
        try {
            const response = await axios.post("http://localhost:3001/notas/poner", texto)
            setenvio(!envio)
            window.alert(response.data)
        } catch (error) {
            window.alert(error.response.data)
        }
    }
    useEffect(()=>{
        settexto({...texto, mensaje: ""});
    },[envio])


    return(
    <div className={style.Class}>
         <input type="textarea" onChange={Cambio_input} value={texto.mensaje}/>
         <button onClick={post}>ENVIAR</button>
    </div>
    )}