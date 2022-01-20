import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar =()=>{
    return(
        <nav className={s.navbar}>
            <div className={s.nav}>
                <NavLink to={'/profile'} style={({isActive})=>({color: isActive ? 'gold' : 'gray'})}>Profile</NavLink>
            </div>
            <div className={`${s.i1} ${s.nav}`}>
                <NavLink to={'/dialogs'} style={({isActive})=>({color: isActive ? 'gold' : 'gray'})}>Messages</NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to={'/News'} style={({isActive})=>({color: isActive ? 'gold' : 'gray'})}>News</NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to={'/Music'} style={({isActive})=>({color: isActive ? 'gold' : 'gray'})}>Music</NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to={'/Settings'} style={({isActive})=>({color: isActive ? 'gold' : 'gray'})}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar