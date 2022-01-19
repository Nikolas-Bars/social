import Rica from "../../img/Rica.jpg";
import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";


const Profile =()=>{
    return(
        <div className={s.content}>
            <div className={s.imgc}>
                <img src={Rica} />
            </div>
            <div>Ava + discription</div>
            <div>
                <MyPosts/>
            </div>

        </div>
    )
}

export default Profile