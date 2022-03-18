import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType;
/*    addPost: any
    upText: any*/
    dispatch: (action: ActionTypes)=>void
    store: any
}

const Profile =(props:ProfilePropsType)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile