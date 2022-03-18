import {ActionTypes, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_TEXT = "UPDATE-TEXT"


let initialState = {
    posts: [
        {id: 1, message: "It`s my first post!", likesCount: 4},
        {id: 2, message: "IT-incubator", likesCount: 89},
        {id: 3, message: "Post", likesCount: 454},
        {id: 4, message: "Kabzda kak prosto!!", likesCount: 7},
    ],

    newPostText: 'it-incubator'
}


const profileReducer =(state:ProfilePageType = initialState, action: ActionTypes)=> {

debugger

    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 14
            }
            state.posts.push(newPost)
            state.newPostText = "";
            return state

        case "UPDATE-TEXT":
            state.newPostText = action.text;
            return state
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

    return state
}

export let addPostActionCreator = () => ({type: ADD_POST}as const)

export let updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_TEXT, text: text}as const)

export default profileReducer