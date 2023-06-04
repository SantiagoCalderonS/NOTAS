import { Link } from "react-router-dom"
import style from "./barraguia.module.css"
export function Barraguia(){


return(<div className={style.Class}>
    <Link to="/postal" > <button>POSTEAR</button> </Link>
    <Link to="/papelera" > <button>PAPELERA</button> </Link>
</div>
   
)
}