import {ActionTypes, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"


let initialState = {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "IT-incubator", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
    ],
    profile: null,
    status: 'Place for status'
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.newPostText,
                    likesCount: 0
                }],
                newPostText: ''
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export let addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const setUserProfile = (profile: ProfileType | null) => ({type: SET_USER_PROFILE, profile} as const)

export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfileDatatTC = (userID: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response))
    })
}

export const getStatusTC =(userID: number)=> (dispatch: Dispatch)=> {
    profileAPI.getStatus(userID).then(res => {
        dispatch(setStatusAC(res.data))
    })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch)=>{
    profileAPI.updateStatus(status).then(res=>{
        debugger  // @ts-ignore

        if(res.data.resultCode === 0){                    // если статус успешно ушел на сервер, то мы его сетаем к себе в state
            dispatch(setStatusAC(status))
        }
    })
}

export default profileReducer