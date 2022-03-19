import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'
import {ActionTypes, PostType, ProfilePageType,} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PropsType ={
    addPost:()=>void
    onPostChange:(event: ChangeEvent<HTMLTextAreaElement>)=>void
        newPostText: string
    profilePage: ProfilePageType
}
/*    addPost: ()=>void
    upText: (text: string)=>void*/




const MyPosts = (props: PropsType) => {


    const addPost =()=>{
        props.addPost()
    }

    const onPostChange =(event: ChangeEvent<HTMLTextAreaElement>)=>{
        props.onPostChange(event)
    }


    let postsElement = props.profilePage.posts.map(post => {

        debugger

        return <Post message={post.message} likesCount={post.likesCount} key={post.id}/>
    }).reverse()

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div className={s.textareaa}>
                    <textarea  onChange={onPostChange} value={props.newPostText} />
                </div>
                <div className={s.buttonPost}>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts