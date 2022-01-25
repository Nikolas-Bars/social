import React from 'react'
import {NavLink} from "react-router-dom";


type NavBarFriendsProps = {
    img: any,
    id: string
}


const NavBarFriends =(props: NavBarFriendsProps)=>{



    return(
        <span>
            <NavLink to={'/dialogs/' + props.id}><img src={props.img}/></NavLink>
        </span>
    )
}

export default NavBarFriends