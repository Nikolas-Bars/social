import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'


type PropsType = {
    login: string | null
}

const Header =(props: PropsType)=>{
    return(
        <header className={s.header} style={{display: 'flex', justifyContent: "space-between"}}>
            <img src={cat} className={s.imghead}/>
            {props.login ? <div style={{padding: '10px', backgroundColor: 'wheat', borderRadius: '5px', fontWeight: "bold"}}>{props.login}</div> : <button style={{padding: '10px', backgroundColor: 'wheat', borderRadius: '5px'}}>Login</button>}
    </header>)
}

export default Header