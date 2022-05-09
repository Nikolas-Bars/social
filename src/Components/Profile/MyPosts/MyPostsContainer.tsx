import React from "react";
import {StateType} from "../../../redux/store";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state: StateType) =>{
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch: any) =>{
    return {
        addPost: (newPostText: string)=> {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer