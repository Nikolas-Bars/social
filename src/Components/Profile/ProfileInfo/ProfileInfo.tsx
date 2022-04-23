import s from "./ProfileInfo.module.css";
import Rica from "../../../img/top.png";
import cat from "../../../img/cat.png";
import React, {useState} from "react";
import {ProfileType} from "../../../redux/store";
import Preloader from "../../Preloader/Preloader";
import {useParams} from "react-router-dom";

type PropsType = {
    profile: null | ProfileType,
}

const ProfileInfo = (props: PropsType) => {

    let [toggleContacts, setToggleContacts] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const styleContactItem = {
        display: 'inline-block',
        backgroundColor: 'yellow',
        padding: '5px',
        borderRadius: '5px',
        fontFamily: 'URW Chancery L, cursive',
        margin: '5px',


    }




    return (
        <div className={s.content}>

            <div className={s.imgc}>
                <img src={Rica}/>
            </div>


            <div className={s.descriptionBlock}>
                <img style={{borderRadius: '20px'}} src={props.profile?.photos.small ? props.profile.photos.small : cat}/>
                Ava + discription
            </div>


            <button onClick={() => {
            setToggleContacts(!toggleContacts)
        }}>
            Контакты
        </button>

            {toggleContacts &&
            <div style={{display: "flex", flexDirection: "column", alignItems: 'flex-start'}}>
                {props.profile.contacts.facebook && <div style={styleContactItem}>Facebook: {props.profile.contacts.facebook}</div>}
                {props.profile.contacts.website && <div style={styleContactItem}>Мой сайт: {props.profile.contacts.website}</div>}
                {props.profile.contacts.vk && <div style={styleContactItem}>ВК: {props.profile.contacts.vk}</div>}
                {props.profile.contacts.twitter && <div style={styleContactItem}>Twitter: {props.profile.contacts.twitter}</div>}
                {props.profile.contacts.instagram && <div style={styleContactItem}>Instagram: {props.profile.contacts.instagram}</div>}
                {props.profile.contacts.youtube && <div style={styleContactItem}>Youtube: {props.profile.contacts.youtube}</div>}
                {props.profile.contacts.github && <div style={styleContactItem}>GitHub: {props.profile.contacts.github}</div>}
                {props.profile.contacts.mainLink && <div style={styleContactItem}>MainLink : {props.profile.contacts.mainLink}</div>}
            </div>


            }

        </div>
    )
}

export default ProfileInfo