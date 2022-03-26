import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavBarFriends from "./NavBarFriends";



type NavBarPropsType = {
    state: {
        friends: Array<any>
    }
}

const Navbar = (props: NavBarPropsType) => {
        let friendsElement = props.state.friends.map(el => <NavBarFriends id={el.id} img={el.img} key={el.id}/>)
    return (
        <nav className={s.navbar}>
            <div className={s.nav}>
                <NavLink to={'/profile'} style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Profile</NavLink>
            </div>
            <div className={`${s.i1} ${s.nav}`}>
            <NavLink to={'/dialogs'}
                     style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Messages</NavLink>
        </div>
            <div className={s.nav}>
                <NavLink to={'/users'} style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Users</NavLink>
            </div>

            <div className={s.nav}>
                <NavLink to={'/News'} style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>News</NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to={'/Music'} style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Music</NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to={'/Settings'}
                         style={({isActive}) => ({color: isActive ? 'gold' : 'gray'})}>Settings</NavLink>
            </div>
            <div>
                <div className={s.friends}>
                    FRIENDS
                </div>
                <div className={s.friendsImg}>
                    {friendsElement}
                </div>
            </div>
        </nav>
    )
}

export default Navbar