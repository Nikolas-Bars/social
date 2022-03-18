import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import {
    ActionTypes,
    PostType,
    StateType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type PropsType ={
    store: any
}



const MyPostsContainer = (props: PropsType) => {

let state: StateType = props.store.getState()

    const addPost =()=>{
    debugger
        if(state.profilePage.newPostText.trim() !== ''){

            props.store.dispatch(addPostActionCreator())

        }
    }

    const onPostChange =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        let text = event.currentTarget.value;
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) =>{
        if(event.code === "Enter"){
        addPost()
        }
    }

    let postsElement = state.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>).reverse()

    return (<MyPosts addPost={addPost}
                     onKeyPressEnter={onKeyPressEnter}
                     onPostChange={onPostChange}
                     postsElement={postsElement}
                     newPostText={state.profilePage.newPostText} />

    )
}

export default MyPostsContainer