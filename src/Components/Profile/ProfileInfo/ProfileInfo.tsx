import s from "./ProfileInfo.module.css";
import Rica from "../../../img/top.png";
import cat from "../../../img/cat.png";
import React, {useState} from "react";
import {ProfileType} from "../../../redux/store";
import Preloader from "../../Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";
import {Dispatch} from "redux";
import {savePhotoTC} from "../../../redux/profile-reducer";
import {UpdateForm} from "./updateProfile";
import ContactComponent from "./ContactComponent";

type PropsType = {
    profile: null | ProfileType,
    updateStatusTC: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {

    let [showContacts, setShowContacts] = useState<boolean>(false)

    let myId = useSelector<GlobalStateType, number | null>(state => state.auth.id)

    const [editContacts, setEditContacts] = useState<boolean>(false)

    let photos = useSelector<GlobalStateType, { small: string | null, large: string | null } | null>(state => {
        return state.profilePage.profile && state.profilePage.profile.photos
    })

    const dispatch = useDispatch<Dispatch<any>>()

    const {userID} = useParams<'userID'>()

    if (!props.profile) {
        return <Preloader/>
    }

    const updateAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(savePhotoTC(e.target.files[0]))
        }
    }

    return (
        <div className={s.content}>

            <div className={s.imgc}>
                <img src={Rica}/>
            </div>

            <ProfileStatus updateStatusTC={props.updateStatusTC}/>

            <div className={s.descriptionBlock}>
                <img style={{borderRadius: '20px'}}
                     src={photos && photos.small ? photos.small : cat}/>
                Ava + discription {myId} {userID ? null : <input type={'file'} onChange={(e) => {
                updateAvatar(e)
            }}/>}
            </div>

            <button onClick={() => {
                setShowContacts(!showContacts)
            }}>
                Контакты
            </button>

            {showContacts &&
            <div style={{display: "flex", flexDirection: "column", alignItems: 'flex-start'}}>
                {userID ? null : <button onClick={() => {
                    setEditContacts(!editContacts)
                }}>Редактировать мои данные</button>}

                {editContacts ? <UpdateForm profile={props.profile} editMode={setEditContacts}/> :
                    <ContactComponent profile={props.profile} editContacts={editContacts}/>}
            </div>
            }
        </div>
    )
}

export default ProfileInfo


/*    //     <div style={{display: 'flex', flexDirection: "column"}}>
                        //
                        // {
                        //     props.profile.contacts.facebook &&
                        //         <div style={styleContactItem}>Facebook: {props.profile.contacts.facebook}</div>
                        // }
                        // {props.profile.contacts.website &&
                        //     <div style={styleContactItem}>Мой сайт: {props.profile.contacts.website}</div>}
                        // {props.profile.contacts.vk && <div style={styleContactItem}>ВК: {props.profile.contacts.vk}</div>}
                        // {props.profile.contacts.twitter &&
                        //     <div style={styleContactItem}>Twitter: {props.profile.contacts.twitter}</div>}
                        // {props.profile.contacts.instagram &&
                        //     <div style={styleContactItem}>Instagram: {props.profile.contacts.instagram}</div>}
                        // {props.profile.contacts.youtube &&
                        //     <div style={styleContactItem}>Youtube: {props.profile.contacts.youtube}</div>}
                        // {props.profile.contacts.github &&
                        //     <div style={styleContactItem}>GitHub: {props.profile.contacts.github}</div>}
                        // {props.profile.contacts.mainLink &&
                        //     <div style={styleContactItem}>MainLink : {props.profile.contacts.mainLink}</div>}
                        //
                        // </div> : <UpdateProfile myId={myId} toggle={()=>{setToggleForUpdateUserData(false)}} />
                        // }*/