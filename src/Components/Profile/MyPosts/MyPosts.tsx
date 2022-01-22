import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

let posts = [
    {id: 1, message: "It`s my first post!", likesCount: 4},
    {id: 2, message: "Kabzda kak prosto!", likesCount: 89},
    {id: 2, message: "Post", likesCount: 454},
    {id: 2, message: "it-incubator!", likesCount: 7},
]

let postsElement = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts