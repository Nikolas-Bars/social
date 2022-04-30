import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate, useParams} from "react-router-dom";
import s from './Profile.module.css'


type PropsType = {
    profile: null | ProfileType,
}

const Profile =(props: PropsType)=>{

    const userID = useParams()

    console.log(userID)

    return(
        <div className={s.profileMainContainer}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile