import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'
import {ProfilePageType,} from "../../../redux/store";
import {MyPostForm} from "./MyPostForm";

type PropsType = {
    addPost:(newPostText: string)=>void
    profilePage: ProfilePageType
}

const MyPosts = React.memo((props: PropsType) => {


    const addPost =(newPostText: string)=>{
        if(newPostText.trim() !== ''){
        props.addPost(newPostText)
    }}

    let postsElement = props.profilePage.posts.map(post => {

        return <Post message={post.message} postID={post.id} likesCount={post.likesCount} key={post.id}/>
    }).reverse()

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div className={`${s.textareaa} ${s.buttonPost}`}>
                    <MyPostForm addPost={addPost}/>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts