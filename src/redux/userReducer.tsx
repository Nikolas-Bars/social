import {ActionTypes, usersPageType, UsersType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../Api/api";


const TOGGLE = 'TOGGLE' // меняет статус follow у user
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'    // переключатель для preloader
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS' // // для контроля за переключением disable  на кнопке "подписаться"


let initialState = {
    users: [],
    pageSize: 100,
    count: 0,
    currentPage: 1,
    isFetching: true, //для preloader
    folliwingProgress: [] as number[], // для контроля за переключением disable  на кнопке "подписаться"
}

const userReducer = (state:usersPageType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case 'TOGGLE':

            return {
                ...state,

                users: state.users.map(el => el.id === action.id ? {...el, followed: !el.followed} : el)
            }
        case 'SET_USERS':

            return {
                ...state,
                users: action.users,

            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USER_COUNT":
            return {
                ...state,
                count: action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
        }
        case "TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                folliwingProgress: action.isFetching ? [...state.folliwingProgress, action.id] // isFetching - здесь НЕ ТОТ isFetching который отвечает за прелоадер
                    : [...state.folliwingProgress.filter(id => id !== action.id)]               ,
            }
        default:
                   return state

    }
}

export default userReducer

export const toggleFollow =(id: number)=> ({type: TOGGLE, id: id}as const)
export const setUsers =(users: Array<UsersType>)=> ({type: SET_USERS, users: users}as const)
export const setCurrentPage =(currentPage: number)=> ({type: SET_CURRENT_PAGE, currentPage}as const)
export const setTotalUserCount =(count: number)=> ({type: SET_TOTAL_USER_COUNT, count}as const)
export const toggleIsFetching =(isFetching: boolean)=> ({type: TOGGLE_IS_FETCHING, isFetching}as const)
export const toggleFollowingProgress =(isFetching: boolean, id: number)=>({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id}) as const

export const getUsersTC =(currentPage: number, pageSize:number)=> (dispatch: Dispatch)=>{
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data =>{
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
    })
}

export const followTC = (userID: number) => (dispatch: Dispatch) =>{
    dispatch(toggleFollowingProgress(true, userID))// для контроля за переключением disable  на кнопке "подписаться"
    usersAPI.unFollowUsers(userID).then(resultCode => {
            if (resultCode === 0) {
               dispatch(toggleFollow(userID)) // // меняет статус follow у user
            }dispatch(toggleFollowingProgress(false, userID)) // // для контроля за переключением disable  на кнопке "подписаться"
        }
    )
}


export const unFollowTC = (userID: number) => (dispatch: Dispatch) =>{
    dispatch(toggleFollowingProgress(true, userID))// для контроля за переключением disable  на кнопке "подписаться"
    usersAPI.followUsers(userID).then(resultCode => {
            if (resultCode === 0) {
               dispatch(toggleFollow(userID))

            } dispatch(toggleFollowingProgress(false, userID))// для контроля за переключением disable  на кнопке "подписаться"
        }
    )
}