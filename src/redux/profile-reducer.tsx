import {ActionTypes, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";

const ADD_POST = "ADD-POST"
const UPDATE_TEXT = "UPDATE-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState = {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "IT-incubator", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
    ],
    profile: null,
    newPostText: 'it-incubator'
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 14
                }],
                newPostText: ''
            }


        case "UPDATE-TEXT":
            return {
                ...state,
                newPostText: action.text
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }


    /*   if (action.type === 'ADD-POST') {
           let newPost = {
               id: state.posts.length + 1,
               message: state.newPostText,
               likesCount: 14
           }
           state.posts.push(newPost)
           state.newPostText = "";

       } else if (action.type === "UPDATE-TEXT") {
           state.newPostText = action.text;

       }*/


}

export let addPostActionCreator = () => ({type: ADD_POST} as const)

export let updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_TEXT, text: text} as const)

export const setUserProfile = (profile: ProfileType | null) => ({type: SET_USER_PROFILE, profile} as const)

export const profileDatatTC = (userID: number) => (dispatch: Dispatch) => {
    profileAPI.profileData(userID).then(response => {
        dispatch(setUserProfile(response))
    })
}

export default profileReducer