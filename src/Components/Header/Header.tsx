import React from "react";
import s from './Header.module.css'
import cat from './../../img/cat.png'
import {NavLink} from "react-router-dom";


type PropsType = {
    login: string | null
}

const Header = (props: PropsType) => {
    return (
        <header className={s.header} >
            <div className={s.headerData}>
                <div className={s.headerDataDiv}>
            <img src={cat} className={s.imghead}/>
            {props.login

                ? <div style={{padding: '10px', backgroundColor: 'wheat', borderRadius: '5px', fontWeight: "bold"}}>
                    {props.login}
                </div>


                : <button style={{padding: '10px', backgroundColor: 'blue', borderRadius: '5px'}}>
                    <NavLink to={'/login'}
                             style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Login</NavLink>
                </button>}
            </div>

        </div>

        </header>)
}

export default Header