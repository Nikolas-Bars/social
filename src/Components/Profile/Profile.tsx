import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";
import s from './Profile.module.css'


type PropsType = {
    profile: null | ProfileType,
    updateStatusTC: (status: string)=> void
}

const Profile =(props: PropsType)=>{

    const userID = useParams()

    console.log(userID)

    return(
        <div className={s.profileMainContainer}>
            <ProfileInfo profile={props.profile} updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile