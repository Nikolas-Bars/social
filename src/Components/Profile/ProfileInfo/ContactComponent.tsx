import React from 'react';
import {ProfileType} from "../../../redux/store";
import s from './Contact.module.css'

type ContactPropsType = {
    profile: ProfileType
    editContacts: boolean
}

const ContactComponent = (props: ContactPropsType) => {

    const styleContactItem = {
        display: 'flex',
        backgroundColor: 'yellow',
        padding: '5px',
        borderRadius: '5px',
        fontFamily: 'URW Chancery L, cursive',
        margin: '5px',
    }

    return (
        <div className={s.contactBlock}>
            {Object.entries(props.profile.contacts).map(value => value[1] && <div key={value[0]} className={s.contactItem}>{value[0]} : {value[1]}</div>)}
        </div>
    );
};

export default ContactComponent;