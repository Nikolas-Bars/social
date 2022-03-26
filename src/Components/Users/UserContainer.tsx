import React from 'react';
import {connect} from "react-redux";

import {ActionTypes, StateType, UsersType} from "../../redux/store";
import {setUsersAC, userFollowingToggleAC} from "../../redux/userReducer";
import Users from "./UsersС";

let mapStateToProps = (state: StateType) =>{
   return {
       users: state.usersPage
   }
}

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) =>{
    return {
        toggleFollow: (id: number)=>{

            dispatch(userFollowingToggleAC(id))
        },
        setUsers:(users: Array<UsersType>)=> {
            dispatch(setUsersAC(users))
        }
    }
}



let UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;