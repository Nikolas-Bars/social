import React from 'react'
import fox from '../../../../img/fox.jpg'
import s from "./Post.module.css"

type postPropsType ={
    message: string,
    likesCount: number
}

const Post =(props: postPropsType)=>{
    return (<div className={s.post}>
        <div>
            <img src={fox}/> <div className={s.text}>{props.message}</div>
        </div>
        <span className={s.likesCount}>likes: {props.likesCount}</span>
    </div>
    )
}

export default Post