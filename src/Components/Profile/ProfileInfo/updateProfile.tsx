import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";
import {PhotosType, ProfileType} from "../../../redux/store";
import {Dispatch} from "redux";
import {updateProfileTС} from "../../../redux/profile-reducer";

export type PropsType = {
    toggle: ()=> void
    myId: number | null
}

const UpdateProfile = (props: PropsType) => {

    const profile = useSelector<GlobalStateType, ProfileType>(state => state.profilePage.profile)

    let error = useSelector<GlobalStateType, string | null>(state => state.profilePage.error)

    const dispatch = useDispatch<Dispatch<any>>()

    let photos = useSelector<GlobalStateType, { small: string | null, large: string | null } | null>(state => {
        return state.profilePage.profile && state.profilePage.profile.photos
    })

    const [facebook, setFacebook] = useState<string>(profile.contacts.facebook || '')
    const [github, setGithub] = useState<string>(profile.contacts.github || '')
    const [instagram, setInstagram] = useState<string>(profile.contacts.instagram || '')
    const [mainLink, setMainLink] = useState<string>(profile.contacts.mainLink || '')
    const [twitter, setTwitter] = useState<string>(profile.contacts.twitter || '')
    const [vk, setVk] = useState<string>(profile.contacts.vk || '')
    const [website, setWebsite] = useState<string>(profile.contacts.website || '')
    const [youtube, setYoutube] = useState<string>(profile.contacts.youtube || '')

    const dataForUpdate = {
        "aboutMe": 'string',
        userId: props.myId ? props.myId : 0,
        lookingForAJob: false,
        lookingForAJobDescription: false,
        fullName: profile.fullName,
        "photos": photos ? photos : null,
        contacts: {
            github: github,
            vk: vk,
            facebook: facebook,
            instagram: instagram,
            twitter: twitter,
            website: website,
            youtube: youtube,
            mainLink: mainLink,
        }
    }

    const onClickHandler = () =>{
        dispatch(updateProfileTС(dataForUpdate))
        props.toggle()
    }

    return (
        <div>
        <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
            facebook: <input value={facebook} placeholder={'facebook'} onChange={(e)=>{setFacebook(e.currentTarget.value)}}/>
            github: <input value={github} onChange={(e)=>{setGithub(e.currentTarget.value)}}/>
            instagram: <input value={instagram} onChange={(e)=>{setInstagram(e.currentTarget.value)}}/>
            mainLink: <input value={mainLink} onChange={(e)=>{setMainLink(e.currentTarget.value)}}/>
            twitter: <input value={twitter} onChange={(e)=>{setTwitter(e.currentTarget.value)}}/>
            vk: <input value={vk} onChange={(e)=>{setVk(e.currentTarget.value)}}/>
            website: <input value={website} onChange={(e)=>{setWebsite(e.currentTarget.value)}}/>
            youtube: <input value={youtube} onChange={(e)=>{setYoutube(e.currentTarget.value)}}/>
        </div>
            <button onClick={onClickHandler}>Cохранить изменения. </button>
        </div>
    );
};

export default UpdateProfile;