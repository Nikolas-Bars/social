import {GlobalStateType} from "../../redux/redux-store";
import {StateType} from "../../redux/store";

export const getUsers =(state: StateType)=>{
    return state.usersPage.users
}

export const getPageSize =(state: StateType)=>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount =(state: StateType)=>{
    return state.usersPage.count
}

export const getCurrentPage =(state: StateType)=>{
    return state.usersPage.currentPage
}

export const getIsFetching =(state: StateType)=>{
    return state.usersPage.isFetching
}

export const getFolliwingProgress = (state: StateType) =>{
    return state.usersPage.folliwingProgress
}