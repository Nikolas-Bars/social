import {ActionTypes, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_TEXT = "UPDATE-TEXT"

const profileReducer =(state:ProfilePageType, action: ActionTypes)=> {



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