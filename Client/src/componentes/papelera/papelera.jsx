import axios from "axios"
import { Papel } from "./papel.jsx"
import { useState, useEffect } from "react"
import style from "./papelera.module.css"


export function Papelera (){
     const [papeles, setpapeles]= useState([])
     async function peticion (){
          try {
          const {data}= await axios.get("http://localhost:3001/notas/ver")
          setpapeles([...papeles, ...data.posteados])
          console.log(papeles)
     } catch (error) {
          window.alert("no hay mensajes enviados")
     }}

     useEffect(()=>{peticion();},[])
    

    return(
    <div className={style.Class}>
         {papeles.map((papel)=>{
          console.log(papel)
          return(<Papel papel={papel}/>)
         })}
    </div>
    )}

    /*
import gato from "../../gato.jpg"

export function Papelera (){
   
     const [imagen, setimagen]= useState("")
    
     } catch (error) {
          window.alert("no hay mensajes enviados")
          setimagen(gato)
     }}

     
    

    return(
    <div className={style.Class}>
         { papeles.length !== 0?papeles.map((papel)=>{
          console.log(papel)
          return(<Papel papel={papel}/>)
         }): (<img src={imagen} alt=""/>)}
    </div>
    )} */