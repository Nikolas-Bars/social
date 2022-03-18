
import React from 'react';
import {ActionTypes, SideBarFriendsType} from "./store";
import icon2 from "../img/iconsForDialogs/icon2.jpg";
import icon3 from "../img/iconsForDialogs/icon3.jpg";
import icon4 from "../img/iconsForDialogs/icon4.jpg";

let initialState = {
    friends: [
        {img: icon2, id: '5'},
        {img: icon3, id: '6'},
        {img: icon4, id: '7'},
    ]
}


const sidebarReducer = (state: SideBarFriendsType = initialState, action: ActionTypes) => {
        return state
    }


export default sidebarReducer