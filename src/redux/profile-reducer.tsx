import {ActionTypes, PhotosType, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_ERROR = 'SET_ERROR'

export type ErrorType = {error: string | null}

export type ProfileStateType = ProfilePageType & ErrorType

let initialState = {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "IT-incubator", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
    ],
    profile: {
        "aboutMe": "",
        "contacts": {
            "facebook": "",// почему ts не ругается когда приходит response без этого св-ва????
            "website": "",
            "vk": "",
            "twitter": "",
            "instagram": "",
            "youtube": "",
            "github": "",
            "mainLink": ""
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": false,
        "fullName": "",
        "userId": 0,
        "photos": {
            "small": null,
            "large": null
        }
    },
    error: null,
    status: 'Place for status'
}


const profileReducer = (state: ProfileStateType = initialState, action: ActionTypes): ProfileStateType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: action.newPostText,
                    likesCount: 0
                }],

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
        case "DELETE_POST":
            debugger
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.id)
            }
        case "SAVE_PHOTO":
            return {// @ts-ignore
                ...state, profile: {...state.profile, photos: action.photo}
            }
        case "UPDATE_PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }

        default:
            return state
    }
}

export let addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const setErrorAC = (error: string) => ({type: SET_ERROR, error} as const)

export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const savePhotoAC = (photo: PhotosType) => ({type: 'SAVE_PHOTO', photo} as const)

export const updateProfileAC = (profile: ProfileType) => ({type: 'UPDATE_PROFILE', profile} as const)

export const deletePostActionCreator = (id: number) => ({type: "DELETE_POST", id} as const)

export const getUserProfileDatatTC = (userID: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(response))
}

export const getStatusTC = (userID: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(setStatusAC(response.data))
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) { // если статус успешно ушел на сервер, то мы его сетаем к себе в state
        dispatch(setStatusAC(status))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    dispatch(savePhotoAC(response.data.data.photos))
}


export const updateProfileTС = (data: ProfileType) => (dispatch: Dispatch<any>) => {
    profileAPI.updateProfile(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(updateProfileAC(data))
            } else {
                console.log(res.data.messages)
                dispatch(setErrorAC(res.data.messages))
            }
        }).catch(err => console.log(err))
}


export default profileReducer

