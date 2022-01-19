import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'


const MyPosts =()=>{
    return (
        <div>
            My Posts
           <div className={s.myposts}>
               <div><textarea></textarea></div>
               <button>Добавить пост</button>
           </div>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>

    )
}

export default MyPosts