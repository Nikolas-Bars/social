import React from "react";
import Post from "./Post/Post";
import s from './MyPost.module.css'

type MyPostsPropsType ={
    profilePage: {
        posts: Array<any>
        newPostText: string

    }
    addPost: any
    upText: any
}



const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement: any = React.createRef()

    const addPost =()=>{
       props.addPost()
    }

    const onPostChange =()=>{
        let text = newPostElement.current.value;
        props.upText(text)
    }




    let postsElement = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div className={s.myposts}>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
                </div>
                <div>
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