import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, ProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";


type PropsType = {
    profile: null | ProfileType,
    setUserProfile: (profile: null | ProfileType) => void
}

const Profile =(props: PropsType)=>{

    const userID = useParams()

    console.log(userID)

    return(
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile