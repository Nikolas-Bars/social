import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'
import {ActionTypes, PostType, } from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType ={
    profilePage: {
        posts: Array<PostType>
        newPostText: string

    }
/*    addPost: ()=>void
    upText: (text: string)=>void*/
    dispatch: (action: ActionTypes)=> void
}



const MyPosts = (props: MyPostsPropsType) => {


    const addPost =()=>{
        if(props.profilePage.newPostText.trim() !== ''){
            debugger
       props.dispatch(addPostActionCreator())
            debugger
        }
    }

    const onPostChange =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        let text = event.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) =>{
        if(event.code === "Enter"){
        addPost()
        }
    }

    let postsElement = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div className={s.textareaa}>
                    <textarea onKeyPress={onKeyPressEnter} onChange={onPostChange} value={props.profilePage.newPostText} ></textarea>
                </div>
                <div className={s.buttonPost}>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div>
                {postsElement.reverse()}
            </div>
        </div>
    )
}

export default MyPosts