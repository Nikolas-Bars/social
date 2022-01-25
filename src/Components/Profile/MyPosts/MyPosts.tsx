import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

type MyPostsPropsType ={
    posts: Array<any>
}



const MyPosts = (props: MyPostsPropsType) => {
    let refElement: any = React.createRef()
    const addPost =()=>{
        let text = refElement.current.value;
        alert(text)
    }
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div>
                    <textarea ref={refElement}></textarea>
                </div>
                <div>
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