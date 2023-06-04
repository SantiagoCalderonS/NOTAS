import style from "./papel.module.css"

export function Papel (props){
    return (
        <div className={style.Class}>
            <button>MENSAJE NUMERO {props.papel.id}:</button>
            <p>{props.papel.text}</p>
        </div>
    )
    }