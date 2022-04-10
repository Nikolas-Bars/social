import {ActionTypes, usersPageType, UsersType} from "./store";


const TOGGLE = 'TOGGLE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 100,
    count: 0,
    currentPage: 1,
    isFetching: true
}

const userReducer = (state:usersPageType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case 'TOGGLE':
            debugger
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
                isFetching: !state.isFetching
        }
        default:
                   return state

    }
}

export default userReducer

export const userFollowingToggleAC =(id: number)=> ({type: TOGGLE, id: id}as const)
export const setUsersAC =(users: Array<UsersType>)=> ({type: SET_USERS, users: users}as const)
export const setCurrentPageAC =(currentPage: number)=> ({type: SET_CURRENT_PAGE, currentPage}as const)
export const setTotalUserCountAC =(count: number)=> ({type: SET_TOTAL_USER_COUNT, count}as const)
export const toggleIsFetchingAC =()=> ({type: TOGGLE_IS_FETCHING}as const)


