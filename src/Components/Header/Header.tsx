import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'

const Header =()=>{
    return(
        <header className={s.header}>
        <img src={cat} className={s.imghead}/>
    </header>)
}

export default Header