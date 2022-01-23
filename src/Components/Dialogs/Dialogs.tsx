import React from 'react'
import s from './../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {
    state: {
        dialogs: Array<any>,
        messages: Array<any>
    }
}

const Dialogs = (props: DialogsPropsType) => {
debugger
    let dialogsElement = props.state.dialogs.map(el => <div key={el.id}><NavLink to={'/dialogs/' + el.id}><DialogItem name={el.name} img={el.img}/></NavLink></div>)
    let messagesElement = props.state.messages.map(el => <div className={s.message} key={el.id}><Message  message={el.message} /></div>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs