import Rica from "../../img/Rica.jpg";
import React from "react";
import s from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profilePage: any;
    addPost: any
    upText: any

}

const Profile =(props:ProfilePropsType)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts  addPost={props.addPost} profilePage={props.profilePage} upText={props.upText}/>
        </div>
    )
}

export default Profile