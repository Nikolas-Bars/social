import {ActionTypes, usersPageType, UsersType} from "./store";


const TOGGLE = 'TOGGLE'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const userReducer = (state:usersPageType = initialState, action: ActionTypes) => {
    switch(action.type) {
           case 'TOGGLE':
               debugger
               return {
                   ...state,

                   users: state.users.map(el=> el.id === action.id ? {...el, followed: !el.followed} : el)
               }
               case 'SET_USERS':
                   return {
                       ...state,
                       users: action.users
                   }
               default:
                   return state

    }
}

export default userReducer

export const userFollowingToggleAC =(id: number)=> ({type: TOGGLE, id: id}as const)
export const setUsersAC =(users: Array<UsersType>)=> ({type: SET_USERS, users: users}as const)


