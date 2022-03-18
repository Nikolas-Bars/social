import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'
import {ActionTypes, PostType, } from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PropsType ={
    addPost:()=>void
    onPostChange:(event: ChangeEvent<HTMLTextAreaElement>)=>void
    onKeyPressEnter:(event: KeyboardEvent<HTMLTextAreaElement>)=>void
    postsElement: Array<any>
    newPostText: string
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

    const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) =>{
        props.onKeyPressEnter(event)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div className={s.textareaa}>
                    <textarea onKeyPress={onKeyPressEnter} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div className={s.buttonPost}>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div>
                {props.postsElement}
            </div>
        </div>
    )
}

export default MyPosts