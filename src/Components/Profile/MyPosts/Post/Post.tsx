import React from 'react'
import fox from '../../../../img/fox.jpg'
import s from "./Post.module.css"

const Post =()=>{
    return (<div className={s.post}>
        <div>
            <img src={fox}/> Post
        </div>
        <span>like</span>
    </div>
    )
}

export default Post