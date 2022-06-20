import React from 'react'
import fox from '../../../../img/fox.jpg'
import s from "./Post.module.css"
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {deletePostActionCreator} from "../../../../redux/profile-reducer";

type postPropsType ={
    message: string,
    likesCount: number
    postID: number
}

const Post =(props: postPropsType)=>{

    const dispatch = useDispatch<Dispatch>()

    const deleteHandler = () =>{
        dispatch(deletePostActionCreator(props.postID))
    }

    return (<div className={s.post}>
        <div className={s.divImg}>
            <img src={fox}/> <button onClick={deleteHandler}>X</button>
            <div className={s.text}>{props.message}</div>
        </div>
        <span className={s.likesCount}>likes: {props.likesCount}</span>
    </div>
    )
}

export default Post